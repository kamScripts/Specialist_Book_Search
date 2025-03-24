import { buildList } from "./displayContent.js";

class Logger {

    constructor(wishList, readingList) {
        this.username = '';
        this.currentUser = {};
        this.wishSection = wishList;
        this.readingList = readingList
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
            this.currentUser = users[username];
            this.username = username;            
            this.loadUserLists()
        } else {
            alert('Invalid username or password.');
        }
    }
    loadUserLists() {
        buildList(this.currentUser.wishList, this.wishSection);
        buildList(this.currentUser.readingList, this.readingList);
    }
    addBookToUserList(list, item) {
        if (!this.currentUser) {
            alert('Please log in to manage your lists.');
        }

        const users = JSON.parse(localStorage.getItem('users')) || {};
        const user = users[this.username];
        user[list].push(item);
        localStorage.setItem('users', JSON.stringify(users));
        this.loadUserLists();

    }

};

export default Logger;