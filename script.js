// função que adiciona a tarefa
function addTask() {
    //titulo da tarefa
    const taskTitle = document.querySelector(".task-title").value;
    
    if(taskTitle) {
        //clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adiciona titulo
        newTask.querySelector(".task-titles").textContent = taskTitle;

        //remove as classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona a tarefa na lista
        const list = document.querySelector(".task-list");
        list.appendChild(newTask);
        
        //adiciona o evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //adiciona o evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
           completeTask(this); 
        })

        //limpar o texto
        document.querySelector(".task-title").value = "";
        
    }
}

//função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//função para completar a tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

// Evento para adicionar a tarefa
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", function(e) {
    
    e.preventDefault();
   
    addTask();
})