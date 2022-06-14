const todoBody = document.querySelector(".todo-body");
const addTask = document.querySelector("#addTask");

const newTask = `
<div class="task">
    <div class="task-head">
        <div class="task-name"></div>
    </div>
    <div class="task-body">
        <button id="task-start">start</button>
        <button id="task-change">change</button>
        <button id="task-details">details</button>
    </div>
</div>`;

addTask.addEventListener("click", ()=> {

    todoBody.innerHTML+=newTask;
    todoBody.insertAdjacentElement("afterbegin", "p")
});


console.log(newTask)
const startbutton = document.querySelector("#task-start");

const starttask = startbutton.addEventListener("click", () => {
    document.querySelector('.progress-body').appendChild(document.querySelector(newTask))

})