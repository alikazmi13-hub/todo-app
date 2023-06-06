const form = document.getElementById('login-form');
const login = document.getElementById('login-btn');


document.addEventListener('submit',(e)=>{
    e.preventDefault()


    Validate();
})


function Validate(){

const email = document.getElementById('email');
const password = document.getElementById('password');
const error =  document.getElementsByClassName('error');

if(email.value == ''){
    console.log(error)
}if(email.value === ""){
    document.getElementById()
}


}