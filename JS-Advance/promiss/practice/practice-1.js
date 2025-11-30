/*const task =  new Promise((resolve , reject) => {
    let isTask = true
    setTimeout(() => {
        if(!isTask){
            resolve('Task Completed')
        } else{
            reject('Something went wrong')
        }
    } , 2000)
})

task.then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})



const task2 = new Promise((resolve, reject) => {
    reject("Something went wrong")
})

task2
  .then(msg => console.log(msg))
  .catch(err => console.log(err))

// console.log(task)

*/

/*

const randomNUmber = new Promise((resolve , reject) => {
    let number = Math.floor(Math.random() * 10) 
    console.log(number)
    if(number > 5){
        resolve('the number is greater than 5')
    } else{
        reject('the number is less than 5')
    }
})

randomNUmber.then((nums) => {
console.log(nums)
})
.catch((error) => {
    console.log(error)
})
    */

/*

const thirdPractice = new Promise((resolve , reject) => {
    let number = 5
    resolve(number)
})

thirdPractice.then((num) => {
    return num * 10
}).then((num) => {
    console.log(num + 10)
})

*/

/*

function checkPassword(pass){
    return new Promise((resolve, reject) => {
        if(pass === 'secret'){
            resolve('access granted')
        }else{
            reject('access denied')
        }
    })

}

async function runCheck(){
    try{
    const response = await checkPassword('secret')
    console.log(response)        
    }
    catch (error) {
        console.log(error)
    }

}

runCheck()
*/

const p1 = new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve('Resolve first')
        } , 1000)
})

const p2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve('Resolve second')
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve third')
    } , 500)
})

Promise.all([p1 , p2, p3]).then((values) => {
    console.log(values)
})