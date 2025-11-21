// Load from storage OR use default tasks
let todoItem = JSON.parse(localStorage.getItem('todoItem')) || [
    { name: 'Watching Youtube', completed: false },
    { name: 'Watching tutorial', completed: false }
];

function saveFromStorage() {
    localStorage.setItem('todoItem', JSON.stringify(todoItem));
}

const div = document.querySelector('.js-todo-items');

renderTodo();

function renderTodo() {
    let todoHtml = '';

    todoItem.forEach((value, index) => {
        let html = `
            <div class="child ${value.completed ? "completed" : ""}" data-index="${index}">
                <input type="checkbox" class="task-checkbox" ${value.completed ? "checked" : ""}>
                ${value.name}
                <button class="remove-btn">Remove</button>
            </div>
        `;
        todoHtml += html;
    });

    div.innerHTML = todoHtml;
}

// Handle checkbox + remove using ONE listener
div.addEventListener('change', e => {
    if (e.target.classList.contains('task-checkbox')) {
        const parent = e.target.closest('.child');
        const index = parent.dataset.index;

        // Update the array with checked/unchecked value
        todoItem[index].completed = e.target.checked;

        // Add or remove strike-through class
        parent.classList.toggle('completed', e.target.checked);

        saveFromStorage();
    }
});

div.addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn')) {
        const parent = e.target.closest('.child');
        const index = parent.dataset.index;

        todoItem.splice(index, 1);
        saveFromStorage();
        renderTodo();
    }
});

// Add new todo
document.querySelector('.add').addEventListener('click', e => {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const inputElm = document.querySelector('.js-input');
    let name = inputElm.value.trim();

    if (!name) {
        alert('Add your todo');
        return;
    }

    todoItem.push({
        name,
        completed: false
    });

    inputElm.value = '';
    saveFromStorage();
    renderTodo();
}
