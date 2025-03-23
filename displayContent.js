const addToList = (button, list)=> {
    const article = button.closest('article')
    console.log(article.id)
}
document.querySelectorAll('.wish-btn').forEach(button => {
    button.addEventListener('click', ()=>addToList(button, 'list'))
})

const addToReadingList = (button) => {
    const article = button.closest('article')
    console.log(article.id)
}

function buildBookFromArray(array, parentElement){
    parentElement.innerHTML += array.map(
        ({ title, author, genre, bookFormat, pageCount, publicationYear,
            averageReview, numberOfReviews, description
         }) => {
            return `
                <article id="${title}" class="book">
                    <h3>${title}</h3>
                    <p>${author} - ${publicationYear}</p>
                    <p>Rating: ${averageReview} Reviews: ${numberOfReviews}</p>
                    <p>${bookFormat.join(', ')}</p>
                    <p>${description}</p>
                    <div class=btns-container>
                        <button class="wish-btn">Add to Wish List</button>
                        <button class="read-btn">Add to Reading List</button>
                    </div>
                </article>
            `}
    ).join(''); 
    };

export default buildBookFromArray