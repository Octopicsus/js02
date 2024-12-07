console.log(' \n-----------  TASK - 01  ------------\n ');

// Розкласти за цифрами п'ятизначне число і вивести у вхідному порядку, але через пробіл. Приклад:
// 10369
// 1 0 3 6 9
// (використовуємо оператор %)


let num = 10369;

let num05 = 10369 % 10;

let num04 = num - num05;

num04 = (num04 / 10) % 10;

let num03 = num05 % num04;

let num02 = num03 % num03;

let num01 = num % num05;

let result = num01 + ' ' + num02 + ' ' + num03 + ' ' + num04 + ' ' + num05;

console.log('Your initial value -> ' + num + '\n ')
console.log('Result: ' + result);



console.log(' \n-----------  TASK - 02  ------------\n ');

// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert (або console.log) вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

console.log('>>> // Disable comments !!! <<<')

// let name = prompt('Your name');
// let message = `Hello, ${name}! How are you?`;
// alert(message);



console.log(' \n-----------  TASK - 03  ------------\n ');

// Дано тризначне число, яке надає користувач, потрібно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?


let Num = 990;
Num = Num.toString();

Str = Num.split('');
console.log('Your Number -> ' + Num + '\n ');

let numLength = String(Num).length === 3;
console.log('Is a three-digit number? -> ' + numLength + '\n ');

let isAllSame = Str[0] === Str[1] && Str[1] === Str[2];

let isSame = Str[0] === Str[1] || Str[1] === Str[2] || Str[2] === Str[0];

console.log('Are all digits same? -> ' + isAllSame);
console.log('The number contains same digits? -> ' + isSame);

