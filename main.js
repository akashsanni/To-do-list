// //variables

// const addTask = document.querySelector('#add-task')
// const taskContainer = document.querySelector('#task-container')
// const  inputTask = document.querySelector('#input-task')

// //Event Listener
// addTask.addEventListener('click',function(){

//     let task = document.createElement('div');
//     task.classList.add('task');

//     let li =document.createElement('li');
//     li.innerText = `${inputTask.value}`;
//     task.appendChild(li);

//     let checkButton = document.createElement("button")
//     checkButton.innerHTML = `<i class="fa fa-check-square-o"></i>`
//     checkButton.classList.add('checkTask')
//     task.appendChild(checkButton)

//     let deleteButton = document.createElement("button")
//     deleteButton.innerHTML = `<i class="fa fa-trash"></i>`
//     deleteButton.classList.add('deleteTask')
//     task.appendChild(deleteButton)

//     if(inputTask.value === ""){
//         alert('Please Enter a Task!')
//     }else 
//     taskContainer.appendChild(task)

// })



//pratice

//variables

const addTask = document.querySelector('#add-task')
const inputTask = document.querySelector('#input-task')
const taskContainer = document.querySelector('#task-container')

addTask.addEventListener('click',function(){

    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    li.classList.add('list')
    task.appendChild(li)

    let checkButton = document.createElement('button')
    checkButton.classList.add('checkTask')
    checkButton.innerHTML = `<i class="fa fa-check-square-o" id="checkBox"></i>`
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteTask')
    deleteButton.innerHTML = `<i class="fa fa-trash" id="trash"></i>`
    task.appendChild(deleteButton)

    if(inputTask.value === ""){
        alert('Please Enter a Task')
    }else
        taskContainer.appendChild(task)

})