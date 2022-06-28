///array 
let laptops= [
    'apple',
'assus',
'dell',
'hp ',
'msi',
'lenovo',
'acer'


];

if (laptops.includes('assus')){
console.log('i have 5 laptops from the assus core i 5');
};
// i have 5 laptops from the assus core i 5

console.log(laptops.indexOf('msi'));
//4
console.log(laptops.indexOf('samsung'));
//-1

let mobile = [
    'iphone11',
    'samsung',
    'mi',
    'relmie'
];
mobile.push('htc');
console.log(mobile);

// (5) ['iphone11', 'samsung', 'mi', 'relmie', 'htc']
mobile.pop();
console.log(mobile);

// (4) ['iphone11', 'samsung', 'mi', 'relmie']
mobile.shift();
console.log(mobile);
// 3) ['samsung', 'mi', 'relmie']
mobile.unshift('iphone12');
console.log(mobile);
// (4) ['iphone12', 'samsung', 'mi', 'relmie']

let letters = ['a','b','c ', 'd ','e'];

letters.reverse();
console.log(letters);

// (5) ['e', 'd ', 'c ', 'b', 'a']


console.log(letters.join());
// e,d ,c ,b,a

console.log(letters.join('&'));
// e&d &c &b&a

let gun = ['mp4', 'akm', 'groza', 'f8', 'sniper z'];
// console.log(gun.slice(0,3));
let gun2 = gun.slice(0,3);
console.log(gun2);
console.log(gun.splice(0,1,'g8'))

let people =['ahmad', 'khaled','mark','abdo'];
console.log(people.sort());
// 4) ['abdo', 'ahmad', 'khaled', 'mark']


// nested Array
const animal=[
    ['lion','laguar']
    ,
    ['dogs','cat'],
    ['chiken','fish']
];
console.log(animal);
