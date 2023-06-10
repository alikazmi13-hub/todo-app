class myHome{

    constructor(){
        this.initHome();
    }
    
    // initializing Homepage
    initHome(){
    let loginLink = document.getElementById('login-link')
    loginLink.addEventListener('click',() => this.goToLogin)
    
    // get signup button using id and on click show signup page
    let signupLink = document.getElementById('signupLink')
    signupLink.addEventListener('click',() => this.goToSignup)
    
    }
    // wait until login page load
    async goToLogin(){
    window.location.pathname = "login.html"
    }
    // wait until login page load
    async goToSignup(){
        window.location.pathname = "login.html"
    }
}

const home = new myHome()