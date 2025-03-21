const advancedSearchLink = document.getElementById('advanced-search-link');
const advancedSearch= document.getElementById('search-section');
const closeDialogButton = document.getElementById('close-dialog');
const links = document.getElementsByClassName('link')
let activeEl = null

for (const link of links) { 
    link.addEventListener('click', (event) => {        
        event.preventDefault();
        for (const link of links) {
            document.querySelector(`${link.getAttribute('href')}`).className = 'inactive'
        }             
        switchVisibility(document.querySelector(`${link.getAttribute('href')}`)) 

    });
}
const switchVisibility = (section)=>{
    section.className = section.className === 'inactive' ? 'active' : 'inactive';
}



