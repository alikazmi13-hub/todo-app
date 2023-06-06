    const signup = document.getElementById('signup');

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const pwd = document.getElementById('password');
    const confirm_p = document.getElementById('confirm-p');

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordformat=  /^[A-Za-z]\w{7,14}$/;

    signup.addEventListener('submit',(e) => {
    e.preventDefault();

    addUser();

})







function addUser(){
    
    const firstnameValue = fname.value.trim();
	const lastnameValue = lname.value.trim();
	const useremailValue = email.value.trim();
	const passwordValue = pwd.value.trim();
	const confirmpasswordValue = confirm_p.value.trim();

   

    if(firstnameValue === ''){
        setErrorFor(fname, 'First Name cannot be blank')
    }if(firstnameValue === ""){
        setSuccessFor(fname)

    }if(lastnameValue === ''){
        setErrorFor(lname, 'Last Name cannot be blank')
    }if(lastnameValue === ""){
        setSuccessFor(lname)

    }if(useremailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    }if(useremailValue.match(mailformat)){
        setSuccessFor(email)

    }if(passwordValue === ''){
        setErrorFor(pwd, 'Password cannot be blank')
    }if(passwordValue.match(passwordformat)){
        setSuccessFor(pwd)

    }if(confirmpasswordValue != passwordValue){
        setErrorFor(confirm_p, 'Password should be match')
    }if(confirmpasswordValue === passwordValue){
        setSuccessFor(confirm_p)
    }else{
      localStorage.setItem('email',email.value);
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
	