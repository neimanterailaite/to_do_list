const todoBody = document.querySelector(".todo-body");
const progressBody = document.querySelector(".progress-body");
const doneBody = document.querySelector(".done-body");
const addTaskButton = document.querySelector("#addTask");
const inputTaskName= document.querySelector("#newTaskName")


/* 
<div class="task">
        <div class="task-head"></div>
        <div class="task-body">
            <button id="task-start">start</button>
            <button id="task-delete">delete</button>
            <button id="task-details">details</button>
        </div>
</div>
 */

function createNewTask(){

    if(inputTaskName.value){
        
        const newTask = document.createElement("div");
        newTask.classList.add("task");

        const newTaskHead = document.createElement("div");
        newTaskHead.classList.add("task-head");

        const newTaskBody = document.createElement("div");
        newTaskBody.classList.add("task-body")

        const startButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const detailsButton = document.createElement("button");

        startButton.textContent="start";
        deleteButton.textContent="delete";
        detailsButton.textContent="details";

        startButton.classList.add("task-start");
        deleteButton.classList.add("task-delete");
        detailsButton.classList.add("task-details");

        newTaskBody.append(startButton,deleteButton,detailsButton);

        newTask.append(newTaskHead, newTaskBody);
        todoBody.append(newTask);
        return;

    }
    return alert("You need to input a name!")



}

function startTask(e) {
//create done button and delete the start button with remove child function
}

function doneTask(e) {
    //only has delete and details button
    
}




addTaskButton.addEventListener("click", createNewTask);






































// addTask.addEventListener("click", ()=> {

//     todoBody.innerHTML+=newTask;
//     // todoBody.insertAdjacentElement("afterbegin", "p")
//     const deleteTask = document.querySelectorAll("#task-delete");
//     const startTask = document.querySelectorAll("#task-start");
    
//     deleteTask.forEach(e => {
//         e.addEventListener("click", e=>{
//            return e.target.closest(".task").remove();
//         })
//     })

//     startTask.forEach(e => {
//         e.addEventListener("click", e => {
//             progressBody.append(e.target.closest(".task"));
//         })
//     })

// })





