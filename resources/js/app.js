//Selectors

const todoinput = document.querySelector(".todo-input");
const todobtn = document.querySelector(".todo-btn");
const todolist = document.querySelector(".todo-list");
const filteroption =document.querySelector(".filter-todo");

//Event Listener

document.addEventListener('DOMContentLoaded',gettodos);
todobtn.addEventListener("click", addtodo);
todolist.addEventListener("click", dltchk);
filteroption.addEventListener("click", filtertodo);


//Function

function addtodo(event)
{
    //prevents form to submit
    event.preventDefault();
    //create a div in ul todo-list
    const tododiv = document.createElement('div');
    tododiv.classList.add("todo");
    //create li inside the div
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //add todo to local storage
    savelocaltodos(todoinput.value);
    //create complete button
    const completedbtn = document.createElement('button');
    completedbtn.innerHTML = '<ion-icon name="checkmark" class="chk"></ion-icon>';
    completedbtn.classList.add("complete-btn");
    tododiv.appendChild(completedbtn);
    //create delete button
    const deletebtn = document.createElement('button');
    deletebtn.innerHTML = '<ion-icon name="trash" class="dlt"></ion-icon>';
    deletebtn.classList.add("delete-btn");
    tododiv.appendChild(deletebtn);
    //append to list
    todolist.appendChild(tododiv);
    //clear todo input value
    todoinput.value="";
}

function dltchk(e){
    const item = e.target;
    if(item.classList[0] === "delete-btn")
    {
        const todo = item.parentElement;
        todo.classList.add("fall");
        removelocaltodos(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filtertodo(e){
    const todos = todolist.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value)
        {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                    
                } 
                else 
                {
                    todo.style.display = "none";
                    
                }
                break;
            case "incomplete":
                if(!todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                    
                } 
                else 
                {
                    todo.style.display = "none";
                    
                }
                break;
        }
    });
}


function savelocaltodos(todo){
    //do i have items already?
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function gettodos(){
    //do i have items already?
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        //create a div in ul todo-list
    const tododiv = document.createElement('div');
    tododiv.classList.add("todo");
    //create li inside the div
    const newtodo = document.createElement('li');
    newtodo.innerText = todo;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //create complete button
    const completedbtn = document.createElement('button');
    completedbtn.innerHTML = '<ion-icon name="checkmark" class="chk"></ion-icon>';
    completedbtn.classList.add("complete-btn");
    tododiv.appendChild(completedbtn);
    //create delete button
    const deletebtn = document.createElement('button');
    deletebtn.innerHTML = '<ion-icon name="trash" class="dlt"></ion-icon>';
    deletebtn.classList.add("delete-btn");
    tododiv.appendChild(deletebtn);
    //append to list
    todolist.appendChild(tododiv);
    })
}


function removelocaltodos(todo){
    //do i have items already?
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex = todo.children[0].innerText;
    todos.splice(todos.indexof(todoindex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
