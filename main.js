//variables

const addTask = document.querySelector('#add-task')
const inputTask = document.querySelector('#input-task')
const taskContainer = document.querySelector('#task-container')

//Event Listener
var items = []
if(JSON.parse(localStorage.getItem("items"))==null){
    localStorage.setItem("items",JSON.stringify("d"))
}

const local = JSON.parse(localStorage.getItem("items"));
 items = [...local]
function creating(i , items){
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${items[i]}`
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
    taskContainer.appendChild(task)

    checkButton.addEventListener('click',function(){

        // console.log(checkButton.parentElement)
        checkButton.parentElement.style.textDecoration = "line-through"

    })

    deleteButton.addEventListener('click',function(){

        // let target = e.target

        // target.parentElement.parentElement.remove('div')

        // console.log(deleteButton.parentElement)
        deleteButton.parentElement.remove('div')

    })
}

// creating(0,items);
// creating(1,items);
// creating(2,items);

for(let i = 1 ; i< items.length ; i++){
    creating(i,items);

}





addTask.addEventListener('click',function(){

    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    items.push(inputTask.value)
    localStorage.setItem("items",JSON.stringify(items))
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
    }else{
        taskContainer.appendChild(task)
    }

    inputTask.value = ""

    checkButton.addEventListener('click',function(){

        // console.log(checkButton.parentElement)
        checkButton.parentElement.style.textDecoration = "line-through"

    })

    deleteButton.addEventListener('click',function(){

        // let target = e.target

        // target.parentElement.parentElement.remove('div')

        // console.log(deleteButton.parentElement)
        deleteButton.parentElement.remove('div')
    })

})

