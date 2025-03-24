import books from "./books.js";
class Searcher {    
    constructor() {
      this.books = books;
    };
    getBook(bookTitle) {   
        let book = {}     
        Object.keys(this.books).forEach((genre)=>{            
            let match = this.books[genre].find((book) => book.title === bookTitle);
            if (match) {book = match}
        })
        return book
        
    }
  // return all elements form given category
    searchByGenre(genre) {           
            return this.books[genre.toLowerCase()]
    };
      
    // check if string has a match in the resources.  
    searchString(string, resources) {
        if (resources.toLowerCase().includes(string.toLowerCase())) {
            return true
        }
    };
    // Search in category based on filters obj 
    searchInCategory(genre, filters){ 
        return this.books[genre].filter((book)=>{  
            // Check if the all filters match  corresponding book properties.                  
           return Object.entries(filters).every(([key, value])=>{//if filters empty evaluates to true          
                return book[key]?.toString().toLowerCase().includes(value.toString().toLowerCase() );
            });
        });
    };
    //filter by pageCount and Rating, default values in range obj. ensure that any book will be included.
    searchByRange(rangeFilters, array) {
        let {minPages, maxPages, minRating} = rangeFilters
        minPages = parseInt(minPages) || 1;
        maxPages = parseInt(maxPages) || 10000;
        minRating = parseFloat(minRating) || 1;


        return array.filter((item) => item.pageCount >= minPages && item.pageCount <= maxPages &&
         item.averageReview >= minRating
        );
    }
    globalSearch(string) {
        let results = []
        // return if user looking for a genre
        if (this.books.hasOwnProperty(string.toLowerCase())){
            return this.searchByGenre(string)
        }
        // search through a whole library by title or author       
        for (const genre in this.books) {
            this.books[genre].forEach(book => {
                if(this.searchString(string, book.title) || this.searchString(string, book.author ) ){
                    results.push(book)
                }
               });           
         };
        return results
    };
    
    advancedSearch(filterGenre, filters, rangeFilters){
        let results = []        
        console.log(filterGenre, filters, rangeFilters)
        if (filterGenre != 'any') {            
            results = this.searchInCategory(filterGenre, filters);            
            results = this.searchByRange(rangeFilters, results);  
            

        } else { //If no category selected search every category. searchInCategory returns array.
            
           for (const genre in this.books){
            let temp = this.searchInCategory(genre, filters)
            temp = this.searchByRange(rangeFilters, temp);  
            temp.forEach(item => results.push(item))
           }
        }
        return results
    };

};
    
export default Searcher