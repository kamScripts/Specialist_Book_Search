
function buildBookFromArray(array, parentElement){
    parentElement.innerHTML += array.map(
        ({ title, author, genre, bookFormat, pageCount, publicationYear,
            averageReview, numberOfReviews, description
         }) => {
            return `
                <article id="${title}" class="book">
                    <h3>${title}</h3>
                    <p>${author} - ${publicationYear}</p>
                    <p>${genre} ${pageCount} Pages</p>
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
    
function buildList(array, parentElement){ 
    console.log(array)
    if (array.length >= 1){
        parentElement.innerHTML += array.map(
            ({ title, author, genre, bookFormat, pageCount, publicationYear,
                averageReview, numberOfReviews, description
             }) => {
                return `
                    <article id="${title}" class="book">
                        <h3>${title}</h3>
                        <p>${author} - ${publicationYear}</p>
                        <p>${genre} ${pageCount} Pages</p>
                        <p>Rating: ${averageReview} Reviews: ${numberOfReviews}</p>
                        <p>${bookFormat.join(', ')}</p>
                        <p>${description}</p>
                        <div class=btns-container>
                            <button class="remove-btn">Remove From List</button>
                        </div>
                    </article>
                `}
        ).join(''); 
        }
};

export { buildBookFromArray, buildList}