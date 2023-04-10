const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos =  [];

const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id= newToDoObj.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click",deleteToDo);
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newToDoObj.text;

}

function toDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();


}
toDoForm.addEventListener("submit",toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
