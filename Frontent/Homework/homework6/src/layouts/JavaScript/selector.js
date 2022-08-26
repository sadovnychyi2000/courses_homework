document.addEventListener("DOMContentLoaded", (e) => {
    const cardSorting = document.getElementById('cardSorting');
    let typeOfSorting = "New first";
    const cardTypeSortingChange = (e) => {
        typeOfSorting = e.target.value;
        console.log('Спосіб сортування:',typeOfSorting);
    };
    cardSorting.addEventListener("change", cardTypeSortingChange);
});
 