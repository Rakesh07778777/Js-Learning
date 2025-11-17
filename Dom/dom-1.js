const div = document.createElement('div')
const button = document.createElement('button')
const body = document.querySelector('body')
div.append(button)
body.append(div)
button.textContent = 'click me'

button.addEventListener('click', () => {
    console.log('hello')
})

// const para = document.createElement('p')
// const text = document.createTextNode(
//     " -Hey there how are you today")
//     para.append(text)