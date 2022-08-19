/*Створити порожній обєкт*/ 
let user = {};
/*додати властивість name зі значенням власного імені*/
user.name = 'Roman';
console.log(user.name);
/*додайте властивість surname зі значенням власного прізвища*/
user.surname = 'Sadovnychyi';
console.log(user.surname);
/*змініть значення name на Jerry*/ 
user.name = 'Jerry';
console.log(user.name);
/*видаліть властивість name з об'єкта*/
delete user.name;
for (let key in user) {
    console.log(key);  
};

