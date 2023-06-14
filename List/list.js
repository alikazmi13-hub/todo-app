const addtask = document.getElementById('addbtn')
const inputText = document.getElementById('addtask')
const container = document.getElementsByClassName('list-container')
const recordsDisplay = document.getElementById('records')
let tasksArray = []



addtask.addEventListener('click',() => {
    addTask();
    // viewTask();
})


// Getting Data from local storage as string
let objStr = localStorage.getItem('Task')

if(objStr!=null){
    // Creating again object
    tasksArray = JSON.parse(objStr);
}


// viewTask();

// Fnction for add Task
function addTask(){
    const myTask = inputText.value;
    tasksArray.push({'Task': myTask})
    saveTask(tasksArray)
    console.log(tasksArray)
//  viewTask();
}

function viewTask(){
    let display = '';
    tasksArray.forEach((myTask,i) => {
        console.log(task)
        // it will auto add data in row
        display += ` <tr>
        <th scope="row">${i+1}</th>
        <td>${myTask.tasksArray}</td>
        <td>${myTask.tasksArray}</td>
        <td>
          <i class="btn text-white fa fa-edit btn-primary mx-2">delete</i>
          <i class="btn text-white fa fa-delete btn-danger mx-2">delete</i>
         </td>
      </tr>`;

    });
    recordsDisplay.innerHTML = display;

}
// Actions

function saveTask(tasksArray){
    let str = JSON.stringify(tasksArray)
    arr = localStorage.setItem('Task',str);
}
function editTask(){
    
}
function deleteTask(){
    
}




















// class Task{

//     user = null;

//     constructor(){
//         this.currentUser();
//             this.bindings();
//     }

//     bindings(){
//         document.addEventListener('documentLoaded',()=>{

//         })
//     }

//     currentUser(){
//         document.getElementById('')
//     }

//     // initializing Homepage
//     initHome(){
//     let loginLink = document.getElementById('login-link')
//     loginLink.addEventListener('click',() => this.goToLogin)
    
//     // get signup button using id and on click show signup page
//     let signupLink = document.getElementById('signupLink')
//     signupLink.addEventListener('click',() => this.goToSignup)
    
//     }
//     // wait until login page load
//     async goToLogin(){
//     window.location.pathname = "login.html"
//     }
//     // wait until login page load
//     async goToSignup(){
//         window.location.pathname = "login.html"
//     }
// }

// const home = new myHome()
