var emailInput = document.getElementById('Email')
var passwordInput = document.getElementById('Password')
var LoginBTN = document.getElementById('LoginBTN')
var Name = document.getElementById('Name')
var SignupBTN = document.getElementById('SignupBTN')
var asignUp = document.getElementById('asignUp')
var asignIn = document.getElementById('asignIn')
var HaveAcc = document.getElementById('HaveAcc')
var HaveNotAcc = document.getElementById('HaveNotAcc')
var InvalidEmail = document.getElementById('InvalidEmail')
var InvalidPassword = document.getElementById('InvalidPassword')
var done = document.getElementById('done')
var WelcomeCard = document.getElementById('WelcomeCard')
var Card = document.getElementById('Card')
var EmailExists = document.getElementById('EmailExists');
var logoutBTN = document.getElementById('logoutBTN')



function UserDetails() {
    var Email = emailInput.value;
    var Pass = passwordInput.value;
    var name = Name.value;

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var PassRegex = /^.{3,}$/;

    var valid = true;


    if(Email == '' || Pass == ''){
        alert('inputs are required!')
    }

    var storedEmail = localStorage.getItem('userEmail');
    if (storedEmail === Email) {
        EmailExists.classList.replace('d-none', 'd-block');
        done.classList.add('d-none');
        valid = false;
    } else {
        EmailExists.classList.replace('d-block', 'd-none');
    }

    if (!emailRegex.test(Email)) {
        InvalidEmail.classList.replace('d-none', 'd-block');
        valid = false;
    } else {
        InvalidEmail.classList.replace('d-block', 'd-none');
    }

    if (!PassRegex.test(Pass)) {
        InvalidEmail.classList.replace('d-none', 'd-block');
        valid = false;
    } else {
        InvalidEmail.classList.replace('d-block', 'd-none');
    }

    if (valid) {
        localStorage.setItem('userEmail', Email);
        localStorage.setItem('userPassword', Pass);
        localStorage.setItem('userName', name);
        done.classList.replace('d-none', 'd-block');
    }
}

function validateInput() {
    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');

    if (storedEmail === emailInput.value && storedPassword === passwordInput.value) {
        WelcomeCard.classList.replace('d-none','d-block')
        Card.classList.replace('d-block','d-none')
        done.classList.replace('d-none', 'd-block');
    } else {
        InvalidEmail.classList.replace('d-none', 'd-block');
    }
}


function logOut(){
    WelcomeCard.classList.add('d-none')
    Card.classList.replace('d-none','d-block')
}

function login(){

    Name.classList.replace('d-block','d-none')
    LoginBTN.classList.replace('d-none','d-block')
    SignupBTN.classList.replace('d-block','d-none')
    HaveNotAcc.classList.replace('d-none','d-block')
    HaveAcc.classList.replace('d-block','d-none')
    asignUp.classList.replace('d-none','d-block')
    asignIn.classList.replace('d-block','d-none')
    done.classList.replace('d-block', 'd-none');
    InvalidEmail.classList.replace('d-block', 'd-none');




}

function signUp(){
    SignupBTN.classList.replace('d-none','d-block')
    LoginBTN.classList.replace('d-block','d-none')
    Name.classList.replace('d-none','d-block')
    asignUp.classList.replace('d-block','d-none')
    asignIn.classList.replace('d-none','d-block')
    HaveAcc.classList.replace('d-none','d-block')
    HaveNotAcc.classList.replace('d-block','d-none')
    done.classList.replace('d-block', 'd-none');
    InvalidEmail.classList.replace('d-block', 'd-none');
}

asignIn.addEventListener('click',login)
LoginBTN.addEventListener('click',validateInput)
SignupBTN.addEventListener('click', UserDetails);
asignUp.addEventListener('click',signUp)
logoutBTN.addEventListener('click',logOut)