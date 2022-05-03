let addToDoButton = document.getElementById('addToDo');
let toDoLists = document.getElementById('toDoLists');
let input = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
    var toDoList = document.createElement('p');
    toDoList.classList.add('to-do-list');
    toDoList.innerText = input.value;
    toDoLists.appendChild(toDoList);
    input.value = "";
    
    input.focus();

    toDoList.addEventListener('dblclick', function(){
        toDoList.style.textDecoration = "line-through";
    })
})

