const burgerMenuBtn = document.getElementById('burgerMenu');
const burgerMenuList = document.getElementById('burgerMenuList');
const burgerMenuClose = document.getElementById('burgerMenuClose');
const handleburgerMenuOpen = () => {
    burgerMenuList.style.display = 'block';
}
const handleburgerMenuClose = () => {
    burgerMenuList.style.display = 'none';
}
// const handleburgerMenuOpen = () => {
//     burgerMenuList.style.display = 'block';
// }
burgerMenuBtn.addEventListener('click', handleburgerMenuOpen);
burgerMenuClose.addEventListener('click',handleburgerMenuClose)