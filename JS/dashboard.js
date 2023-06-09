
const fname = document.getElementById('fname');


window.onload = function() {

    const registeredName = localStorage.getItem('First',fname);
    const firstNameSpan = document.getElementById("firstNameSpan");

    firstNameSpan.textContent = registeredName;

}