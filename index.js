
/* first todo */
const todoList1 = [];

function getTodo1(){
  const textBox = document.getElementById("todo1")
  const text = textBox.value;

  todoList1.push(text)
  console.log(todoList1)

  textBox.value = '';
}

/* second todo */

const todoList2 = [];

function renderTodoList(){
  const textBox2 = document.getElementById("todo2")
  const text2 = textBox2.value;

  todoList2.push(text2)

  let todoListHTML = '';

  for (let i = 0; i < todoList2.length; i++){
    const todo = todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
   }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML

    textBox2.value = ''
}

/* third todo */

const todoList = [];


renderTodo()

function renderTodo(){
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {text, dateText} = todoObject;
    const html= `
    <div>${text}</div>
    <div>${dateText}</div>
    <button onclick="
    todoList.splice(${i}, 1)
    renderTodo();
    "class="delete-todo-button">Delete</button>
   `
    todoListHTML += html;
   }
   console.log(todoListHTML)

    document.querySelector('.js-todo-list-final').innerHTML = todoListHTML

}


function generateTodo(){
  const textBox = document.getElementById("todo-final-version")
  const text = textBox.value;

  const dateBox = document.getElementById("todo-final-version-date")
  const dateText = dateBox.value;

  todoList.push({text, dateText})

  textBox.value = '';

  dateBox.value = '';

  renderTodo();
}



 




