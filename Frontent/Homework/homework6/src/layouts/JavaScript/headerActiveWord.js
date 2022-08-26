const handleHeaderChange = (item) => {
    item.classList.toggle('header-btn--active');
}
const headerBtnItems = document.querySelectorAll('header-btn');  
headerBtnItems.forEach((item) => {
    item.addEventListener('click', e => {
        handleHeaderChange(item)
    })
});