import { buildList } from "./displayContent.js";
const readingListSection = document.getElementById('reading-list');
const wishSection = document.getElementById('wish');
class Logger {

    constructor() {
              
        this.wishSection = wishSection;
        this.readingList = readingListSection
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
    loadUserLists(username) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        const user = users[username];
        if (user.wishList.length >= 1) {
            this.wishSection.innerHTML = '';
            buildList(user.wishList, this.wishSection);
            document.querySelectorAll('.remove-btn').forEach(button => {
                const article = button.closest('article')
                button.addEventListener('click', ()=>{article.remove()})
        }
    );
    }
        if (user.readingList.length >= 1){
            this.readingList.innerHTML = '';
        buildList(user.readingList, this.readingList);
        document.querySelectorAll('.remove-btn').forEach(button => {
            const article = button.closest('article')
            button.addEventListener('click', ()=>{article.remove()})
    }
);
    };
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

    }

};

export default Logger;