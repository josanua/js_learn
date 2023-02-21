'use strict';

import data from "./main.js";

console.log(data);


// const user = {
//     {} : 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPyblicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// console.log(typeof(Object.keys(user)[0]));

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]

const budget = [
    5000,
    15000,
    25000
];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

// console.log(map.get(shops[1]));
// console.log(map.has(shops[4]));
// console.log(typeof(map));
console.log(map.size)
console.log(map.keys())

for (let shop of map.keys()) {
    console.log(shop);
}


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
