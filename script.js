import Searcher from "./search.js"
import { buildBookFromArray }from "./displayContent.js";
const advancedSearchSection= document.getElementById('search-section');
const browseSection = document.getElementById('browse');
const browseLinks = document.querySelectorAll('.browse-links')
const browseFolder = document.getElementById('browse-folder')
const searchResultSection = document.getElementById('search-results');
const loginSection = document.getElementById('login');
const readingListSection = document.getElementById('reading-list');
const wishSection = document.getElementById('wish');
// links opens given section based on the href value.
const links = document.getElementsByClassName('link');
const basicSearchBox = document.getElementById('search-box');
const basicSearchBtn = document.getElementById('basic-search-btn');

const filterCategory = document.getElementById('genre');
const filtersInputs = document.querySelectorAll('.filters');
const rangeInputs = document.querySelectorAll('.range-filters')
const advancedSearchBtn = document.querySelector('#a-search')



const searchEngine = new Searcher()




// SWitch visibility of HTML Sections
const showSection = (section) => {
    section.className = 'active';
}
const hideAllSections = () => {
    searchResultSection.className = 'inactive'
    for (const link of links) {
        document.querySelector(`${link.getAttribute('href')}`).className = 'inactive'
    }   
}
const setActive = (open)=>{
    hideAllSections();
    showSection(open)       

}


const addToList = (button, list)=> {
    const article = button.closest('article')       
    button.disabled=true;
    //clone article and remove btns, then add the remove btn.
    const articleClone = article.cloneNode(true);
    const div = articleClone.querySelector('.btns-container')
    div.innerHTML = '';
    const removeButton = document.createElement('button');
    removeButton.classList = 'remove-btn'
    removeButton.innerText = "Remove from List";
    removeButton.addEventListener('click', () => {
        articleClone.remove();  
    });
    div.appendChild(removeButton)
    if (list === wishSection) {
        wishSection.appendChild(articleClone)
    }
    if (list === readingListSection) {
        readingListSection.appendChild(articleClone)
    }
   
};
// reset values of the search form.
const resetAdvancedSearch = () => {
    filterCategory.value = 'any';
    for (const input of filtersInputs) {
        if (input.name === 'bookFormat') {
            input.value = 'any';
        } else {
            input.value = '';
        }
    }

    for (const input of rangeInputs) {
        input.value = '';
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

advancedSearchBtn.addEventListener('click', (event) => {    
    event.preventDefault();
    searchResultSection.innerHTML = ''
    setActive(searchResultSection);
    const category = filterCategory.value
    const filters = Object.fromEntries(
        [...filtersInputs].filter((filter) => filter.value != '' && filter.value != 'any').map(
        (filter) => [filter.name, filter.value]));
    const rangeFilters = Object.fromEntries(
        [...rangeInputs].map((filter) => [filter.name, filter.value]));  
    buildBookFromArray(searchEngine.advancedSearch(category, filters, rangeFilters), searchResultSection);
    selectResultBtn();
    resetAdvancedSearch();

});
//Add Event Listener to each link element
for (const link of links) { 
    link.addEventListener('click', (event) => {        
        event.preventDefault();        
// Make each section invisible before making selected visible.  
        setActive(document.querySelector(`${link.getAttribute('href')}`))

    });
}
for (const link of browseLinks) {
    link.addEventListener('click', (event)=>{        
        event.preventDefault(); 
        browseFolder.innerHTML = '';    
        buildBookFromArray(searchEngine.advancedSearch(link.getAttribute('data-href'), {}, {}), browseFolder);
        console.log(searchEngine.advancedSearch(link.getAttribute('data-href'), {}, {}), browseFolder)
    })
}




