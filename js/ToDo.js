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
  const list = document.createElement("li");//li태그
  list.id = newTodoObject.id;

  const span = document.createElement("dt");//투두리스트 제목
  span.innerText = newTodoObject.todo;

  const toggle = document.createElement("button");//더보기버튼
  toggle.id = "toggle";
  toggle.innerText = "＋";
  toggle.id = "more_info";

  const memo = document.createElement("dd");//추가메모
  memo.className = "todo_memo";
  memo.innerText = newTodoObject.memo;

  toggle.addEventListener("click", moreinfo);//li 트랜지션

  const button = document.createElement("button");//삭제버튼
  button.id = "delete";
  button.innerText = "Ｘ";
  button.addEventListener("click", deleteTodo);

  list.appendChild(span);
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