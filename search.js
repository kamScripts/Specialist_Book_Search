import books from "./books.js";
class Searcher {    
    constructor() {
      this.searchItems = [];
      this.results = [];
      this.matchesNumber = [];
      this.books = books;
    }
  
    searchByGenre(genre)  {
        if (this.books.hasOwnProperty(genre)){
            return this.books[genre]
        }else {
            return null
        }
      
    }
    searchString(string, resources) {
        if (resources.toLowerCase().includes(string.toLowerCase())) {
            return true
        }else {
            return false
        }
    }


    globalSearch(string) {
        let results = []
        for (let genre in this.books) {
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