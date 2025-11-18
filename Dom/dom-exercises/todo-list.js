let todoItem = [
    { name : 'Watching Youtube'},
    {name : 'Watching tutorial'}
]

const div = document.querySelector('.js-todo-items')


renderTodo()

function renderTodo(){
    let todoHtml = ''
    todoItem.forEach((value , index) => {
        let html = `
        <div class="child" data-index = "${index}">
        ${value.name}
        
        <button class="remove-btn">Remove</button>
        </div>
        `
        todoHtml += html
    })


    div.innerHTML = todoHtml

div.addEventListener('click' , e => {
    if(e.target.classList.contains('remove-btn')){
        const parent = e.target.closest('.child')
        const index = parent.dataset.index
        todoItem.splice(index, 1)
        renderTodo()
    }
})
}




document.querySelector('.add').addEventListener('click' , (e) => {
    addTodo()
    e.preventDefault()
}) 

function addTodo(){
    const inputElm = document.querySelector('.js-input')
    let name = inputElm.value

    if(name){
    todoItem.push({
        name
    })
    } else{
        alert('add your todo')
    }

    inputElm.value = ''

    renderTodo()
}