const salaries = {
Vlad: 100,
Alina:130,
Roman: 110,
Alex: 120,
};
// for (let key in salaries){
//     console.log(key);
// };
let sum = 0;
for (let key in salaries){
    sum = sum + salaries[key];
};
console.log('Сума всіх ЗП:',sum);