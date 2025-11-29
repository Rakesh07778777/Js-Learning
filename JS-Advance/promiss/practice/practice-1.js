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

const randomNUmber = new Promise((resolve , reject) => {
    let number = 6
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