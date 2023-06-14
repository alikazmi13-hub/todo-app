const addtask = document.getElementById('addbtn')
const inputText = document.getElementById('addtask')
const container = document.getElementsByClassName('list-container')
const recordsDisplay = document.getElementById('records')
let tasksArray = []



addtask.addEventListener('click',() => {
    addTask();
    // displayTable();
})


// Getting Data from local storage as string
        let objStr = localStorage.getItem('Task')

        if(objStr!=null){

        // Creating again object
            tasksArray = JSON.parse(objStr);
        }

    // callinig view function
        displayTable();

    // Fnction for add Task
        function addTask(){
            const inputTask = inputText.value;
            tasksArray.push({'Task': inputTask})
            saveTask(tasksArray)
            // empty input field
            inputText.value = '';
            displayTable();
        }

            function displayTable(){
                let display = '';
                tasksArray.forEach((task,i) => {
                // it will auto add data in row
                display += `   
                <tr>
                    <th id="scope" scope="row">${i+1}</th>
                    <td>${task.Task}</td>
                    <td id="actions"><i class="btn btn-sm  fa fa-view btn-primary" onclick='viewTask(${i})'>View</i>
                    <i class="btn btn-sm  fa fa-delete btn-danger" onClick='deleteTask(${i})'>Delete</i></td>
                </tr>
                `;
               
                });

                recordsDisplay.innerHTML = display;
               
            }
         

         // Save Function

            function saveTask(tasksArray){
                let str = JSON.stringify(tasksArray)
                arr = localStorage.setItem('Task',str);
            }

            function viewTask(id){

                tasksArray.alert(id,inputText)
               
            }

            function deleteTask(id){
              tasksArray.splice(id,1)
              saveTask(tasksArray)
              displayTable(tasksArray)
            }



            function Logout(){
        
                window.location.replace("/Login/login.html")
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
