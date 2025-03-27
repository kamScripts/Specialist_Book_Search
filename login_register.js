import { buildList } from "./displayContent.js";
const readingListSection = document.getElementById('reading-list');
const wishSection = document.getElementById('wish');
class Logger {

    constructor() {
              
        this.wishSection = wishSection;
        this.readingSection = readingListSection
    }

    registerUser(username, password) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username]) {
            alert('Username already exists. Choose a different name.')
            return
        }
        users[username] = {
            password: password,
            wishList: [],
            readingList: []
        }
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! You can now log in.');
    }

    loginUser(username, password) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username] && users[username].password === password) {            
            localStorage.setItem('currentUser', username);           
            this.loadUserLists(username)
        } else {
            alert('Invalid username or password.');
        }
    }
    logout(){
        localStorage.removeItem('currentUser');
        location.reload();
    }
    loadUserLists(username) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        const user = users[username];
        if (user.wishList.length >= 1) {
            this.wishSection.innerHTML = '';
            buildList(user.wishList, this.wishSection);
            this.addRemoveBtns('wishList');

    }
        if (user.readingList.length >= 1){
            this.readingSection.innerHTML = '';
        buildList(user.readingList, this.readingSection);
        this.addRemoveBtns('readingList')
    };
    }
    addRemoveBtns(listName){
        document.querySelectorAll('.remove-btn').forEach(button => {
            const article = button.closest('article')
            button.addEventListener('click', ()=>{                
                this.removeFromList(listName, article.id)
                article.remove()
                
            })
    }
);
    }
    removeFromList(listName, item) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        const currentUser = localStorage.getItem('currentUser');
        const user = users[currentUser]
        user[listName] = user[listName].filter((book) => {
            return book.title != item})
        localStorage.setItem('users', JSON.stringify(users))
    }
    addBookToUserList(list, item) {
        const currentUser = localStorage.getItem('currentUser');        
        if (!currentUser) {
            alert('Please log in to manage your lists.');
            return
        }

        const users = JSON.parse(localStorage.getItem('users')) || {};
        const user = users[currentUser];
        user[list].push(item);
        localStorage.setItem('users', JSON.stringify(users));
        this.loadUserLists(currentUser);
// Add method to check if book is on the list already
    }
    isOnList(list, item) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        const currentUser = localStorage.getItem('currentUser');
        const user = users[currentUser]
        return user[list].some((book) => book.title === item)
    }
    

};

export default Logger;