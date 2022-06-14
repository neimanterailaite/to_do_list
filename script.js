const todoBody = document.querySelector(".todo-body");
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
    // todoBody.insertAdjacentElement("afterbegin", "p")
    const deleteTask = document.querySelectorAll("#task-delete");
    
    deleteTask.forEach(e => {
        e.addEventListener("click", (e)=>{
            e.target.closest(".task").remove();
        })
    })

})


