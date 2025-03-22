
import Searcher from "./search.js"

const advancedSearchLink = document.getElementById('advanced-search-link');
const advancedSearch= document.getElementById('search-section');
const closeDialogButton = document.getElementById('close-dialog');
const links = document.getElementsByClassName('link')

const searchEngine = new Searcher()

console.log(searchEngine.searchByGenre('fantasy'))
console.log(searchEngine.globalSearch("sapkowski"));


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



