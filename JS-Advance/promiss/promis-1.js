/*
const firstPromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log('i am print after 1 second')
        resolve()
    } , 1000)

})

firstPromise.then( () => {
    console.log(' I am printed after resovled')
})

//second one we can directly use then

new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log('This is second example')
        resolve()
    } , 1000)
}).then(() => {
    console.log('I am second resolved')
})

*/

//you can pass anything also i can pass strings,arrays.
//and we can access it

/*

const thirdPromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        console.log('Hey there is one is third')
        resolve({name: "rakesh" , id: 2})
    } , 1000)
})

thirdPromise.then((user) => {
    console.log(user)
})

*/

/*

const fourthPromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        let error = true;

        if(!error){
            resolve({username: 'fgnrnasdg' , Id: 343})
        }else{
            reject('ERROR : something wrong with your codes check properly')
        }
    })
})

fourthPromise
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((err) => {
    console.log(err)
})
.finally()

*/


const promiseFive = new Promise((resolve , rejected) => {
    setTimeout(() => {
        let error = true;

        if(!error){
            resolve({username: 'fgnrnasdg' , Id: 343})
        }else{
            rejected('ERROR : Again something wrong with your codes check properly')
        }
    })
})

async function consumePromise(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise()


async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
        console.log('Err :' , error)
    }
}

getAllUsers()



