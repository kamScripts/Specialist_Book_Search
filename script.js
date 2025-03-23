import Searcher from "./search.js"
import buildBookFromArray from "./displayContent.js";
const advancedSearchSection= document.getElementById('search-section');
const browseSection = document.getElementById('browse');
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




const searchEngine = new Searcher()

const category = 'any'

const filters = {
    
};
const rangeFilters = {
    minPages: 1,
    maxPages: 10000,
    minRating: 1
};



console.log(searchEngine.searchInCategory('fantasy', filters))
console.log(searchEngine.advancedSearch(category, filters, rangeFilters))


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
    console.log(article)
    console.log(list)

}


//Add Event Listener to each link element
for (const link of links) { 
    link.addEventListener('click', (event) => {        
        event.preventDefault();        
// Make each section invisible before making selected visible.  
        setActive(document.querySelector(`${link.getAttribute('href')}`))

    });
}
basicSearchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    searchResultSection.innerHTML = ''
    setActive(searchResultSection);    
    const value = basicSearchBox.value
    buildBookFromArray(searchEngine.globalSearch(value), searchResultSection);
    document.querySelectorAll('.wish-btn').forEach(button => {
        button.addEventListener('click', ()=>addToList(button, 'wishlist'))
    })
    document.querySelectorAll('.read-btn').forEach(button => {
        button.addEventListener('click', ()=>addToList(button, 'readinglist'))
    })
    
    basicSearchBox.value='';
});



