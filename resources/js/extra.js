//TO BE APPLIED LATER
//AFTER CONFUSION IS CLEAR



//Event Listener
document.addEventListener('DOMContentLoaded',gettodos);

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
    });
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