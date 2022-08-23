// Напишіть однорядкове рішення, яке вирахує суму квадратних корнів для всіх парних чисел массиву:
// [1, 4, 3, 0, 4, 5, 4] має повернути 6
let arr = [1, 4, 3, 0, 4, 5, 4];
// виводить парні числа масиву
let steamyNum =arr.filter(Number => Number % 2 === 0);
console.log('', steamyNum);
// виводить суму корнів квадратних парних чисел
console.log(steamyNum.reduce((prev, item)=>prev+ Math.sqrt(item),0))
