console.log(' \n-----------  TASK - 01  ------------\n ');

// Розкласти за цифрами п'ятизначне число і вивести у вхідному порядку, але через пробіл. Приклад:
// 10369
// 1 0 3 6 9
// (використовуємо оператор %)

let num = 10369;

let num05 = 10369 % 10;

let num04 = ((num - num05) / 10) % 10;

let num03 = num05 % num04;

let num02 = num03 % num03;

let num01 = num % num05;

let result = num01 + ' ' + num02 + ' ' + num03 + ' ' + num04 + ' ' + num05;

console.log('Your initial value:  ' + num + '\n ');
console.log('RESULT:      ' + result);



console.log(' \n-----------  TASK - 02  ------------\n ');

// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert (або console.log) вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

console.log('>>> // Disable comments !!! <<<');

// let name = prompt('Your name');
// let message = `Hello, ${name}! How are you?`;
// alert(message);



console.log(' \n-----------  TASK - 03  ------------\n ');

// Дано тризначне число, яке надає користувач, потрібно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

let Num = 121;
Num = Num.toString();

Str = Num.split('');
console.log('Your Number ---------------------->  ' + Num + '\n ');

let numLength = String(Num).length === 3;
console.log('Is a three-digit number? --------->  ' + numLength + '\n ');

let isAllSame = Str[0] === Str[1] && Str[1] === Str[2];

let isSame = Str[0] === Str[1] || Str[1] === Str[2] || Str[2] === Str[0];

console.log('Are all digits same? ------------->  ' + isAllSame);
console.log('\nThe number contains same digits? ->  ' + isSame);
console.log(' \n\n ');





console.log(' \n-----------  EXTRA  ------------\n ');

console.log(' \n-----------  E - 1  ------------\n ');

let keyWord = 'Open';
let newWord = 'Closed';
let myMessage = ('Store is Open, and doors are still Open.');
let keyWordLength = keyWord.length;
let startIndex = myMessage.indexOf(keyWord);

let newMessagePart = myMessage.slice(startIndex + keyWordLength).replace(keyWord, newWord);

let newMessage = myMessage.slice(0, startIndex + keyWordLength) + newMessagePart;

//-------------------------------------------------------;

console.log('message:');
console.log(myMessage +'\n ');

console.log('keyWord -------------------------->  ' + keyWord);
console.log('newWord -------------------------->  ' + newWord);
console.log('keyWord Lenght ------------------->  ' + keyWordLength);
console.log('startIndex ----------------------->  ' + startIndex);

console.log('\nnew Part:');
console.log(newMessagePart);

console.log('\nnew Message:');
console.log(newMessage);



console.log('\n\n-----------  E - 2  ------------\n ');

let playBones = [
    '>>> 01 <<<',
    '>>> 02 <<<',
    '>>> 03 <<<',
    '>>> 04 <<<',
    '>>> 05 <<<',
    '>>> 06 <<<',
    '>>> 07 <<<',
    '>>> 08 <<<',
    '>>> 09 <<<',
    '>>> 10 <<<',
    '>>> 11 <<<',
    '>>> 12 <<<',
];

let numberOfBones = playBones.length;
let randomEngine = Math.random();
let bonesIndex = Math.floor(randomEngine * numberOfBones);

console.log("LET'S PLAY\n ");
console.log(playBones[bonesIndex]);
console.log('\n  again!');



console.log(' \n-----------  E - 3  ------------\n ');

// let defaultValue = ' DEFAULT NAME';
// let userName = prompt('Enter your name...');

// console.log('Your name is ...' + (userName || defaultValue));

console.log('>>> // Disable comments !!! <<<');



console.log(' \n-----------  E - 4  ------------\n ');

let userValue = '123a';

console.log('my Number: ' + userValue);

if (isNaN(userValue)) {
    console.log('You did something wrong!');
} else {
    console.log('Your number is: ' + userValue);
}



