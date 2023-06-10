
    const fname = document.getElementById('fname');
    const logout = document.getElementById('logout')

    window.onload = function() {

        const registeredName = localStorage.getItem('First',fname);
        const firstNameSpan = document.getElementById("firstNameSpan");

        firstNameSpan.textContent = registeredName;

    }

    function Logout(){
        
        window.location.href = "login.html"
    }
    function toDo(){
        
        window.location.href = "../lists/to-do.html" 
    }

