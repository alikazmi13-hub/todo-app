const form = document.getElementById('login');
const email = document.getElementById('useremail');
const password = document.getElementById('userpassword');


form.addEventListener('submit',(e) => {
    e.preventDefault();

    Validate();

})

function Validate(){
   
    const registeredemail = localStorage.getItem('Email',email);
    const registeredpassword = localStorage.getItem('Password',password);

    const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

        // if(emailValue == ''){
        //     setErrorFor(email, 'Enter Email')

        // }else if(!emailValue.match(registeredemail)){
        //     setErrorFor(email, 'Enter Registered Email')

        // }else if (emailValue.match(registeredemail)){
        //     setSuccessFor(email)
        
        // }if(passwordValue == ''){
        //     setErrorFor(password, 'Enter Password')

        // }else if( !passwordValue.match(registeredpassword)){
        //     setErrorFor(password, 'Enter Registered Password')

        // }else if (passwordValue.match(registeredpassword)){
        //     setSuccessFor(password)
        //     console.log('Welcome To Dashboard')
        // }else{
        //     console.log('Welcome To Dashboard')
        //     window.location.replace("dasboard.html");

            
        // }






        if(emailValue == ''){
            setErrorFor(email, 'Enter Email')

        }else if(!emailValue.match(registeredemail)){
            setErrorFor(email, 'Enter Registered Email')

        }else{
            (emailValue.match(registeredemail))
            setSuccessFor(email)
        
        }if(passwordValue == ''){
            setErrorFor(password, 'Enter Password')

        }else if( !passwordValue.match(registeredpassword)){
            setErrorFor(password, 'Enter Registered Password')

        }else{
            (passwordValue.match(registeredpassword))
            setSuccessFor(password)
            console.log('Welcome To Dashboard')
            window.location.href = "../html/dasboard.html";
        }
           
       
}










function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}