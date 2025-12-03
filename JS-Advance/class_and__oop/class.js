/*

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password}123`
    }

    changerPass(){
        return `${this.password.toUpperCase()}123`
    }
}

const anotherUser = new User('Rakesh' , 'awrg@google.com' , 'abcd')


console.log(anotherUser)
console.log(anotherUser.encryptPass())
console.log(anotherUser.changerPass())


*/

function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password
}

Object.prototype.encryptPass = function (){
        return `${this.password}123`  
}

Object.prototype.changerPass = function (){
        return `${this.password.toUpperCase()}123`   
}


const anotherUser = new User('Rakesh' , 'awrg@google.com' , 'abcd')


console.log(anotherUser)
console.log(anotherUser.encryptPass())
console.log(anotherUser.changerPass())
