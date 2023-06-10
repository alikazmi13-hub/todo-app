

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



            if(firstnameValue == '' && firstnameValue.length <= 1){    
                setErrorFor(fname, 'Enter Your First Name')

            }else if(firstnameValue == "" || firstnameValue.length >= 2 ){
            setSuccessFor(fname)
            localStorage.setItem('First',fname.value)
            // console.log(fname)

            }if(lastnameValue == '' && lastnameValue.length <= 1){
            setErrorFor(lname, 'Enter Your Last Name')

            }else if(lastnameValue == "" || lastnameValue.length >= 2){
            setSuccessFor(lname)
            localStorage.setItem('Last',lname.value)

            }if(useremailValue == ''){
            setErrorFor(email, 'Email cannot be blank')

            }else if(useremailValue.match(mailformat)){
            setSuccessFor(email);
            localStorage.setItem('Email',email.value);

            }if(passwordValue == ''){
            setErrorFor(pwd, 'Password cannot be blank')

            }else if(passwordValue.match(passwordformat)){
            setSuccessFor(pwd);
            localStorage.setItem('Password',pwd.value);


            }if(confirmpasswordValue == ''){
            setErrorFor(confirm_p, 'Confirm Password cannot be blank')

            }else if(!confirmpasswordValue == passwordValue){
            setErrorFor(confirm_p, 'Password should be match')

            }else if(confirmpasswordValue === passwordValue){
            setSuccessFor(confirm_p)
            localStorage.setItem('Password',confirm_p.value)
            window.location.replace("login.html")
            ;



            }else{
                 return "Please Add Correct Detail" 
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