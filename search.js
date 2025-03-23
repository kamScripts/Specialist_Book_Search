import books from "./books.js";
class Searcher {    
    constructor() {
      this.books = books;
    };
  
    searchByGenre(genre)  {           
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
        return this.searchByGenre(genre).filter((book)=>{  
            // Check if the filters match book object properties                   
           return Object.entries(filters).every(([key, value])=>{
                return book[key]?.toString().toLowerCase().includes(value.toString().toLowerCase() );
            });
        });
    };
    searchByRange(rangeFilters, array) {
        const rangeValues = Object.values(rangeFilters)
        const minPages = parseInt(rangeValues[0]);
        const maxPages = parseInt(rangeValues[1]);
        const minRating = parseFloat(rangeValues[2]);

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

        if (filterGenre != 'any') {
            results = this.searchInCategory(filterGenre, filters);
            results = this.searchByRange(rangeFilters, results);
        } else {
           for (const genre in this.books){
            let temp = this.searchInCategory(genre, filters)
            temp.forEach(item => results.push(item))
           }
        }
        return results
    };

};
    
export default Searcher