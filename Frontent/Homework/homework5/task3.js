let a = prompt( 'Введіть число №1');
let b = prompt('Введіть число №2');
let calculator = {
    sum() {
        return (Number(a) + Number(b));
    },
    mul() {
        return a*b;
    },
    div() {
        return a/b;
       },
};
alert(calculator.sum());
alert(calculator.mul());
alert(calculator.div());