const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


function createTodoItem(taskText) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';


    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.classList.add('done');
        } else {
            li.classList.remove('done');
        }
    });

    
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}


addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText !== '') {
        const todoItem = createTodoItem(taskText);
        todoList.appendChild(todoItem);
        input.value = '';
        input.focus();
    }
});


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});