document.addEventListener("DOMContentLoaded", (e) => {
    const formInputEmail = document.getElementById('formInputEmail');
    const formInputPassword = document.getElementById('formInputPassword');
    const formButtonSignIn = document.getElementById('formButtonSignIn');
    let userEmail = '';
    let userPassword = '';
    const handleInputEmail = (e) => {
        userEmail = e.target.value;
    };
    const handleInputPassword = (e) => {
        userPassword = e.target.value;
    };
    const handleButtonSignIn = (e) => {
        console.log('Email:', userEmail);
        console.log('Password:', userPassword);
    };
    formInputEmail.addEventListener("change", handleInputEmail);
    formInputPassword.addEventListener("change", handleInputPassword);
    formButtonSignIn.addEventListener("click", handleButtonSignIn);
});