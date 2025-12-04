/*

class Student {
    constructor(name, rollNo, attendence = 0){
        this.name = name
        this.rollNo = rollNo
        this.attendence = attendence
    }

    markPresent(){
        this.attendence += 1
        this.rollNo += 1
    }

    getDetails(){
        return `Name: ${this.name} Roll-No: ${this.rollNo} Attendence: ${this.attendence}`
    }

}

const s1 = new Student('Rakesh' , 21)
// console.log(s1.markPresent())

s1.markPresent()
s1.markPresent()
console.log(s1.getDetails())

*/

//Getters and Setters (like controlled access)

class BankAccount{
    constructor(owner, balance){
        this.owner = owner
        this._balance = balance
    }

    get balance(){
        return `${this._balance} Available`
    }

    set balance(amount){
        if(amount < 0){
            console.log(`${amount} this amount is invalid`)
            return;
        }

        this._balance = amount        
    }

   deposit(amount) {
    this._balance += amount
   }
}

const acc = new BankAccount('Rakesh' , 1000)

console.log(acc.balance)

acc.balance = -2

acc.deposit(500)
console.log(acc.balance);

