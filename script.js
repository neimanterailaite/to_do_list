const todoBody = document.querySelector(".todo-body");
const progressBody = document.querySelector(".progress-body");
const addTask = document.querySelector("#addTask");


const newTask = `
<div class="task">
    <div class="task-head">
        <div class="task-name"></div>
    </div>
    <div class="task-body">
        <button id="task-start">start</button>
        <button id="task-delete">delete</button>
        <button id="task-details">details</button>
    </div>
</div>`;

addTask.addEventListener("click", ()=> {

    todoBody.innerHTML+=newTask;
<<<<<<< HEAD
    todoBody.insertAdjacentElement("afterbegin", "p")
});


console.log(newTask)
const startbutton = document.querySelector("#task-start");

const starttask = startbutton.addEventListener("click", () => {
    document.querySelector('.progress-body').appendChild(document.querySelector(newTask))

})
=======
    // todoBody.insertAdjacentElement("afterbegin", "p")
    const deleteTask = document.querySelectorAll("#task-delete");
    const startTask = document.querySelectorAll("#task-start");
    
    deleteTask.forEach(e => {
        e.addEventListener("click", e=>{
           return e.target.closest(".task").remove();
        })
    })

    startTask.forEach(e => {
        e.addEventListener("click", e => {
            progressBody.append(e.target.closest(".task"));
        })
    })

})


>>>>>>> 31c087be053cfa47bcd403391fb69ede72a611f1
