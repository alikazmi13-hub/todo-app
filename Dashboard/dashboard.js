    // const dashboard = document.getElementById('dashboard')
    const email = document.getElementById('email')
    const fname = document.getElementById('fname');
    const logout = document.getElementById('logout')
    const registeredemail = localStorage.getItem('Email',email);



    window.onload = function() {

        const registeredName = localStorage.getItem('First',fname);
        const firstNameSpan = document.getElementById("firstNameSpan");

        firstNameSpan.textContent = registeredName;
        auth();
    }

    function Logout(){
        window.location.href = ("/Home/home.html")
    }

    function toDo(){
        window.location.replace("/List/list.html")
    }


  


    function auth(){
        const email = document.getElementById('email')
        const registeredemail = localStorage.getItem('Email',email);
        
        if(email.match(registeredemail)){
            window.location.pathname = "/dashboard/dashboard.html";
        }else(
            window.location.pathname = "/Home/home.html"
        )
    }