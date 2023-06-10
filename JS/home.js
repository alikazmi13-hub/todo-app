class myHome{

   
    constructor(){
        // this.currentUser();
        this.initHomeButtons();
        this.initHomepage();
    }


    initHomepage(){
     const myhomePage = document.getElementById('home')
     console.log(myhomePage)
    }


    
           
    
    
    // initializing Homepage
    initHomeButtons(){
    let loginLink = document.getElementById('btn-login')
    loginLink.addEventListener('click',() => this.goToLogin)
    
    // get signup button using id and on click show signup page
    let signupLink = document.getElementById('btn-signup')
    signupLink.addEventListener('click',() => this.goToSignup)
    
    }
    // wait until login page load
    async goToLogin(){
    window.location.pathname = "login.html"
    }
    // wait until login page load
    async goToSignup(){
    window.location.pathname = "signup.html"
    }
}

const home = new myHome();