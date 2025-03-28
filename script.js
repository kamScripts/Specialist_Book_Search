import Searcher from "./search.js"
import Logger from "./login_register.js";
import { buildBookFromArray }from "./displayContent.js";
import books  from "./books.js";


const browseLinks = document.querySelectorAll('.browse-links')
const browseFolder = document.getElementById('browse-folder')
const searchResultSection = document.getElementById('search-results');
const searchOutput = document.querySelector('#search-results div');
const readingListOutput = document.querySelector('#reading-list div');
const wishOutput= document.querySelector('#wish div');
// links opens given section based on the href value.
const links = document.getElementsByClassName('link');


const basicSearchForm = document.querySelector('#basic-search');
const searchForm = document.getElementById('advanced-search');
const registerForm = document.querySelector('#registerForm');
const loginForm = document.querySelector('#loginForm');
const registerBtn = document.getElementById('register-btn')
const userInfo = document.getElementById('user-info');
const userSpan = document.getElementById('user-name');

const searchEngine = new Searcher(books)
const logger = new Logger(wishOutput, readingListOutput);

const currentUser = localStorage.getItem('currentUser');
console.log(currentUser)
if (currentUser) {
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
    basicSearchForm.className = 'active'   
     
}
const hideAllSections = () => {
    searchResultSection.className = 'inactive'
    for (const link of links) {
        document.querySelector(`${link.getAttribute('href')}`).className = 'inactive';

    }   
}
const setActive = (open)=>{
    hideAllSections();
    showSection(open);
}

const addToList = (button, list, book, htmlList)=> {
    logger.addBookToUserList(list, book);
    button.textContent = `On the ${htmlList}`;   
    button.disabled = true;
     
};
const addBtns = (selector, list, htmlList) => {
    console.log(selector)
    document.querySelectorAll(selector).forEach(button => {
        console.log(list) 
        if (currentUser){
            const article = button.closest('article') 
            const book = searchEngine.getBook(article.id);
            const isOnTheList= logger.isOnList(list, article.id);

            if (!isOnTheList){
                button.addEventListener('click', ()=>{addToList(button, list, book, htmlList)})                
            }else {
                button.textContent = `On the ${htmlList}`;
                button.disabled = true;
                
            }            
        }else {
            button.addEventListener('click', ()=>{alert('Please log in to manage your lists.')}) 
        }
               
    })
}

// add buttons functionality to the search results.
const addResultsBtns  = () => {
    addBtns('.wish-btn', 'wishList', 'Wish List');
    addBtns('.read-btn', 'readingList', 'Reading List');
};

basicSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchOutput.innerHTML = '';
    setActive(searchResultSection);
    const formData = new FormData(basicSearchForm);
    const value = formData.get('searchBox')
    const searchResults = searchEngine.globalSearch(value);
    buildBookFromArray(searchResults, searchOutput);
    addResultsBtns()
    basicSearchForm.reset()

});

searchForm.addEventListener('submit', (event) => {    
    event.preventDefault();
    searchOutput.innerHTML = ''
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
    buildBookFromArray(searchResults, searchOutput);
    addResultsBtns();
    searchForm.reset()

});
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const registerData = new FormData(registerForm);
    const username = registerData.get('username')
    const password = registerData.get('password');
    logger.registerUser(username, password);
    registerForm.reset();
    registerForm.classList.toggle('inactive');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const loginData = new FormData(loginForm)
    const username = loginData.get('username');
    const password = loginData.get('password');
    logger.loginUser(username, password);
    loginForm.reset()
    location.reload()
});
//Add Event Listener to each link element
for (const link of links) { 
    link.addEventListener('click', (event) => {        
        event.preventDefault();        
// Make each section invisible before making selected visible.        
        setActive(document.querySelector(`${link.getAttribute('href')}`))
        if (link.getAttribute('href')==='#search-section') {
            basicSearchForm.className = 'inactive'
        }

    });
}
//build browse section
for (const link of browseLinks) {
    link.addEventListener('click', (event)=>{        
        event.preventDefault(); 
        browseFolder.innerHTML = '';
        const content = searchEngine.advancedSearch(link.getAttribute('data-href'), {}, {});  
        buildBookFromArray(content, browseFolder);
        addResultsBtns()
    })
}
//switch registration form visibility
registerBtn.addEventListener('click', () => registerForm.classList.toggle('inactive'))




