
document.addEventListener("DOMContentLoaded", (e) => {
    const emailInput = document.getElementById('emailInput');
    const emailButtonStart = document.getElementById('emailButtonStart');
    let userEmailFooter = '';
    const handleEmailInput = (e) => {
        userEmailFooter = e.target.value;
    };
    const handleButtonStart = (e) => {
        console.log('Email:', userEmailFooter);
    };
    emailInput.addEventListener("change", handleEmailInput);
    emailButtonStart.addEventListener("click", handleButtonStart);
});