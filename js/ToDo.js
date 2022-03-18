const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todolist = document.querySelector("#todoList");

const TODOSAVE_KEY = "todoSave";
let todoSave = [];

function localTodoSave(){
  localStorage.setItem(TODOSAVE_KEY, JSON.stringify(todoSave));
}

function deleteTodo(event){
  const listToDelete = event.target.parentElement;
  todoSave = todoSave.filter((todoSave) => todoSave.id !== parseInt(listToDelete.id));
  listToDelete.remove();
  localTodoSave();
}

function paintTodo(newTodoObject) {
  const list = document.createElement("li");
  list.id = newTodoObject.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "Ｘ";
  button.addEventListener("click", deleteTodo);
  span.innerText = newTodoObject.todo;
  list.appendChild(span);
  list.appendChild(button);
  todolist.appendChild(list);
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodoList = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    todo: newTodoList,
    id: Date.now(),
  };
  todoSave.push(newTodoObject);
  paintTodo(newTodoObject);
  localTodoSave();
};

todoForm.addEventListener("submit", handleTodoSubmit);

const getSavedTodo = localStorage.getItem(TODOSAVE_KEY);

if(getSavedTodo !== null){
  const parsedTodos = JSON.parse(getSavedTodo);
  todoSave = parsedTodos;
  parsedTodos.forEach(paintTodo);
}