var userOne = {
    email: 'emma.gmail.com',
    name: 'Emmanuel',
    login: function () {
        console.log(this.email, "has logged in")
    }, 
    logout: function () {
        console.log(this.email, "has logged out")
    }
}

userOne.name = 'Chinwendu'

class User {
    constructor(email, name) {
        this.email = email,
        this.name = name,
        this.score = 0;
    }
    login() {
        console.log(this.email, "just logged in")
        return this
    }
    logout() {
        console.log(this.email, "just logged out")
        return this
    }
    updateScore() {
        this.score++
        console.log(this.email, 'score is now', this.score)
        return this;
    }
}

class Admin extends User {
    deleteuser(user) {
        users = users.filter((u) => {
           return u.email !== user.email 
        }) 
    }
}

var userOne = new User('emma.gmail.com', 'Emmanuel')
var userTwo = new User('ebuka.gmail.com', 'Ebuka')

// userOne.login()
// userTwo.logout().updateScore().updateScore().logout() 
// var admin = new Admin('ukanna', 'ukann@gmail.com')

// var users = [userOne, userTwo, admin];

// admin.deleteuser(userTwo)

// console.log(users)

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    
}


User.prototype.login = function () {
    this.online = true
    console.log(this.email, 'has logged in')
}
User.prototype.logout = function () {
    this.online = false
    console.log(this.email, 'has logged out')
}

console.log(userOne);
userTwo.login();  