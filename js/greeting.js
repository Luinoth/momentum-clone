const loginForm = document.querySelector('#Login_form');
const loginInput = document.querySelector('#Login_form input');
const greetings = document.querySelector('#greetings');
const container = document.querySelector("#greetings_container");
const clockBox = document.querySelector("#clock");
const logout = document.querySelector("#logout");

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  printGreetings(username);
}

function logoutSubmit(){
  localStorage.clear("username");
  window.location.reload();
}

function printGreetings(username){
  greetings.innerText = `안녕, ${username}!`;
  container.classList.remove("hidden");
  clockBox.classList.remove("flying");
  logout.classList.remove("flying");
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener('submit', loginSubmit);
}else{
  printGreetings(savedUsername);
}

logout.addEventListener("click", logoutSubmit);