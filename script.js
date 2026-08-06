const todoform = document.getElementById("todoForm");
const Inputtache = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskcounter = document.getElementById("taskcounter");


todoForm.addEventListener("submit", function(event){
    event.preventDefault();


    const taskText = taskInput.value;

    if(taskText === ""){
        return;
    }
    
    const li = document.createElement("li");

    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value =  "";
});