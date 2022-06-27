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

