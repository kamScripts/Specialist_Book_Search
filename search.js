import books from "./books.js";
class Searcher {    
    constructor() {
      this.searchItems = [];
      this.results = [];
      this.matchesNumber = [];
      this.books = books;
    }
  
    searchByGenre(genre)  {        
            return this.books[genre.toLowerCase()]
        }
      
// check if string has a match in the resources.  
    searchString(string, resources) {
        if (resources.toLowerCase().includes(string.toLowerCase())) {
            return true
        }else {
            return false
        }
    }
// Search in category based on filters obj 
    searchInCategory(genre, filters){ 
        return this.books[genre].filter((book)=>{  
// Check if the filters match book data                     
           return Object.entries(filters).every(([key, value])=>{
                return book[key]?.toString().toLowerCase().includes(value.toString().toLowerCase());
            })
        })

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
               })           
         }
        return results
    }
    
 

  };
    
export default Searcher