const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("#todoInput");
const memo = todoForm.querySelector("#memo");
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

function moreinfo(event){
  const list = event.target.parentElement;
  const memo = list.querySelector("dd");
  
  if(list.style.height == "16rem"){
    list.style.height = "3rem";
    memo.style.opacity = "0";
  } else{
    list.style.height = "16rem";
    memo.style.opacity = "1";
  }
}

function paintTodo(newTodoObject) {
  const list = document.createElement("li");
  list.id = newTodoObject.id;
  const span = document.createElement("dt");
  span.innerText = newTodoObject.todo;
  const checkBox = document.createElement("input");
  checkBox.type =  "checkbox";
  checkBox.id = "toggle";
  checkBox.className = "hidden";
  const toggle = document.createElement("label");
  toggle.htmlFor = "toggle";
  toggle.innerText = "＋";
  toggle.id = "more_info";
  const memo = document.createElement("dd");
  memo.className = "todo_memo";
  memo.innerText = newTodoObject.memo;
  toggle.addEventListener("click", moreinfo);
  const button = document.createElement("button");
  button.innerText = "Ｘ";
  button.addEventListener("click", deleteTodo);
  list.appendChild(span);
  list.appendChild(checkBox);
  list.appendChild(toggle);
  list.appendChild(button);
  list.appendChild(memo);
  todolist.appendChild(list);
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodoList = todoInput.value;
  const newMemo = memo.value;
  todoInput.value = "";
  memo.value = "";
  const newTodoObject = {
    todo: newTodoList,
    memo: newMemo,
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