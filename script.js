import Searcher from "./search.js"
import Logger from "./login_register.js";
import { buildBookFromArray }from "./displayContent.js";


const browseLinks = document.querySelectorAll('.browse-links')
const browseFolder = document.getElementById('browse-folder')
const searchResultSection = document.getElementById('search-results');
const readingListSection = document.getElementById('reading-list');
const wishSection = document.getElementById('wish');
// links opens given section based on the href value.
const links = document.getElementsByClassName('link');
const basicSearchForm = document.querySelector('.basic-search');
const basicSearchBox = document.getElementById('search-box');
const basicSearchBtn = document.getElementById('basic-search-btn');
const searchForm = document.getElementById('advanced-search');

const registerForm = document.querySelector('#registerForm');
const loginForm = document.querySelector('#loginForm');

const userInfo = document.getElementById('user-info');
const userSpan = document.getElementById('user-name');


const searchEngine = new Searcher()
const logger = new Logger();

const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    console.log(currentUser)
    logger.loadUserLists(currentUser);
    userSpan.textContent = currentUser + ' (Log out)';
    userInfo.classList.remove('link')

    userInfo.addEventListener('click', (event) => {
        event.preventDefault();
        logger.logout()
  })
    
}


// SWitch visibility of HTML Sections
const showSection = (section) => {
    section.className = 'active';
}
const hideAllSections = () => {
    searchResultSection.className = 'inactive'
    for (const link of links) {
        document.querySelector(`${link.getAttribute('href')}`).className = 'inactive';
        if (link.getAttribute('href') == '#search-section'){
            basicSearchForm.display='None'
        }
    }   
}
const setActive = (open)=>{
    hideAllSections();
    showSection(open)       

}


const addToList = (button, list)=> {
    const article = button.closest('article')       
    button.disabled=true;
    
    if (list === wishSection) {
        
        logger.addBookToUserList('wishList', searchEngine.getBook(article.id));
    }
    if (list === readingListSection) {        
        logger.addBookToUserList('readingList', searchEngine.getBook(article.id))
    }
    
   
};

// add buttons to the search results.
const selectResultBtn = () => {
    document.querySelectorAll('.wish-btn').forEach(button => {
        button.addEventListener('click', ()=>addToList(button, wishSection))
    })
    document.querySelectorAll('.read-btn').forEach(button => {
        button.addEventListener('click', ()=>addToList(button, readingListSection))
    })
};
basicSearchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    searchResultSection.innerHTML = ''
    setActive(searchResultSection);    
    const value = basicSearchBox.value
    buildBookFromArray(searchEngine.globalSearch(value), searchResultSection);
    selectResultBtn()
    basicSearchBox.value='';
});

searchForm.addEventListener('submit', (event) => {    
    event.preventDefault();
    searchResultSection.innerHTML = ''
    setActive(searchResultSection);
// Access form data and extract inputs.
    const formData = new FormData(searchForm);
    const category = formData.get('genre')
    const filters = Object.fromEntries(
        [...formData.entries()].filter(([key, value]) => 
        value.trim() !== '' && value !== 'any' && key !== 'genre' &&
        !key.startsWith('min') && !key.startsWith('max')
        )        
    );
    const rangeFilters = Object.fromEntries(
        ['minRating', 'minPages', 'maxPages'].map((key) => [key, formData.get(key) || ''])
    );
// search books based on filters, display results and reset html form.
    const searchResults = searchEngine.advancedSearch(category, filters, rangeFilters);
    buildBookFromArray(searchResults, searchResultSection);
    selectResultBtn();
    searchForm.reset()
});
//Add Event Listener to each link element
for (const link of links) { 
    link.addEventListener('click', (event) => {        
        event.preventDefault();        
// Make each section invisible before making selected visible.  
        setActive(document.querySelector(`${link.getAttribute('href')}`))

    });
}
//build browse section
for (const link of browseLinks) {
    link.addEventListener('click', (event)=>{        
        event.preventDefault(); 
        browseFolder.innerHTML = '';    
        buildBookFromArray(searchEngine.advancedSearch(link.getAttribute('data-href'), {}, {}), browseFolder);
        selectResultBtn()
    })
}

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    logger.registerUser(username, password);
    event.target.username.value = '';
    event.target.password.value = '';
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    logger.loginUser(username, password);
    event.target.username.value = '';
    event.target.password.value = '';
    location.reload()
});



