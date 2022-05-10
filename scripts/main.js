const form = document.getElementById('form');
const textInput = document.getElementById('textInput');
const msg = document.getElementById('msg');
const dateInput = document.getElementById('dateInput');
const textarea = document.getElementById('textarea');
const tasks = document.getElementById('tasks');
let add = document.getElementById('add')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation()
})

let formValidation = () => {
    if (textInput.value === '') {
        msg.innerHTML = 'Task cannot be blank'
    }
    else {
        msg.innerHTML = '';
        acceptData();
        add.setAttribute('data-bs-dismiss', 'modal');
        add.click();
        (() =>{
            add.setAttribute('data-bs-dismiss', 'modal');
        })()
    }
}

let data = []

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    });

    localStorage.setItem('data', JSON.stringify(data));

    createData()
}

let createData = () => {
    data.map()
    tasks.innerHTML += `
    <div>
      <span class="fw-bold">${data.text}</span>
      <span class="small text-secondary">${data.date}</span>
      <p>${data.description}</p>
      <span class="options">
          <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
          <i onclick="deleteTask(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `

    resetForm();

}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    selectedTask.remove();
}

let resetForm = () => {
    textInput.value = '';
    dateInput.value = '';
    textarea.value = '';
}

(() => {
    data =localStorage.getItem('data')
})()