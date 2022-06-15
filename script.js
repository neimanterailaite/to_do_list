const todoBody = document.querySelector(".todo-body");
const progressBody = document.querySelector(".progress-body");
const doneBody = document.querySelector(".done-body");
const addTaskButton = document.querySelector("#addTask");
const inputTaskName= document.querySelector("#newTaskName")

addTaskButton.addEventListener("click", createNewTask);

function createNewTask(){

    if(inputTaskName.value){
        const newTask = document.createElement("div");
        newTask.classList.add("task");

        const newTaskHead = document.createElement("div");
        newTaskHead.classList.add("task-head");
        newTaskHead.textContent=inputTaskName.value;
        inputTaskName.value="";

        const newTaskBody = document.createElement("div");
        newTaskBody.classList.add("task-body")

        const startButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const detailsButton = document.createElement("button");

        startButton.textContent="start";
        deleteButton.textContent="delete";
        detailsButton.textContent="details";

        startButton.addEventListener("click", startTask);
        deleteButton.addEventListener("click", deleteTask);
        detailsButton.addEventListener("click", showDetails);

        newTaskBody.append(startButton,deleteButton,detailsButton);

        newTask.append(newTaskHead, newTaskBody);

        return todoBody.append(newTask);
    }

    return alert("You need to input a task name!")
}

function startTask(e) {
    const doneButton = document.createElement("button");
    doneButton.textContent="done";
    doneButton.addEventListener("click", doneTask);

    const inProgressTask = e.target;
    progressBody.append(inProgressTask.closest(".task"));
    return inProgressTask.closest(".task-body").replaceChild(doneButton, inProgressTask);
}

function doneTask(e) {
    const doneTask = e.target;
    doneBody.append(doneTask.closest(".task"));
    return doneTask.remove();
}

function deleteTask(e) {
    const deleteTask = e.target;
    return deleteTask.closest(".task").remove();
}

function showDetails(e) {
    //bootstrap modal with possibility to change the name of the task and to write some additional information in a textarea
}







// inpout[name="input"]
