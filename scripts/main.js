const form = document.getElementById('form');
const textInput = document.getElementById('textInput');
const msg = document.getElementById('msg');
const date = document.getElementById('dateInput');
const textarea = document.getElementById('textarea');
const tasks = document.getElementById('tasks')

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
        acceptData()
    }
}

let data = {}

let acceptData = () => {
    data['text'] = textInput.value;
    data['date'] = date.value;
    data['description'] = textarea.value;
    console.log(data)
}


let createData = () => {
    tasks.innerHTML = `
    <div>
      <span class="fw-bold">${data.text}</span>
      <span class="small text-secondary">${data.date}</span>
      <p>${data.description}</p>
      <span class="options">
          <i class="fas fa-edit"></i>
          <i class="fas fa-trash-alt"></i>
      </span>
    </div>
    `
}