document.addEventListener("DOMContentLoaded", (e) => {
    const inputName = document.getElementById('inputName');
    const inputDescription = document.getElementById('inputDescription');
    const inputImgName = document.getElementById('inputImgName');
    const buttonAdd = document.getElementById('buttonAdd');
    let userName = '';
    let userDescription = '';
    let userImgName = '';
    const handleInputName = (e) => {
        userName = e.target.value;
    };
    const handleInputDescription = (e) => {
        userDescription = e.target.value;
    };
    const handleInputImgName = (e) => {
        userImgName = e.target.value;
    };
    const handleButtonAdd = (e) => {
        console.log('Name:',userName );
        console.log('Description:',userDescription);
        console.log('Image Name:',userImgName );
    };
    inputName.addEventListener("change",handleInputName);
    inputDescription.addEventListener("change", handleInputDescription);
    inputImgName.addEventListener("change", handleInputImgName );
    buttonAdd.addEventListener("click", handleButtonAdd);
});