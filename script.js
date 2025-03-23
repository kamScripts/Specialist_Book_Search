
import Searcher from "./search.js"

const advancedSearchLink = document.getElementById('advanced-search-link');
const advancedSearch= document.getElementById('search-section');
const closeDialogButton = document.getElementById('close-dialog');
const links = document.getElementsByClassName('link')

const searchEngine = new Searcher()

const filters = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    publicationYear: 2000,

}



console.log(searchEngine.globalSearch("Harry"));
console.log(searchEngine.searchInCategory('fantasy', filters))



//Add Event Listener to each link element
for (const link of links) { 
    link.addEventListener('click', (event) => {        
        event.preventDefault();
// Make each section invisible before making selected visible.       
        for (const link of links) {
            document.querySelector(`${link.getAttribute('href')}`).className = 'inactive'
        }             
        switchVisibility(document.querySelector(`${link.getAttribute('href')}`)) 
    });
}
// SWitch visibility of HTML Sections
const switchVisibility = (section)=>{
    section.className = section.className === 'inactive' ? 'active' : 'inactive';
}



