//map holds key-value pair where the keys can be of any type
//creating js map :  using Map.set() and using set()

const fruits = new Map([
["apples",500],
["bananas",300],
["oranges",200]
]);
console.log(fruits);
//here "fruits" is object

const fruits1 = new Map();
fruits1.set("apples",500);
fruits1.set("mango",500);
fruits1.set("oranges",500);
console.log(fruits1);
console.log(fruits1.size);
//console.log(fruits1.clear);
console.log(fruits1.delete("oranges"));
//console.log(fruits1.);


//set reintializes the members and get method rerurns the value of a key in a map
//MAP METHOD => GET,SET,.SIZE,DELETE,CLEAR,.HAS,

let text = "";
fruits.forEach(function(value,key)
{
  text+=key + '=' + value;
})
console.log(text);



// let text1 = "";
// for(const x of fruits.enteries())
// {
//   text1 = text1 + x + "";
// }
// console.log(text1);



let text2 = "";
for(const x of fruits.values()){
  text2 += x;
}
console.log(text2);



let total = 0;
for(const x of fruits.values()){
  total += x;
};
console.log(total);


const kiwi = {name:"kiwi"};
const pineapples = {name:"pineapples"};
const mangoes = {name:"mangoes"};

const newFruits = new Map();
newFruits.set(kiwi,200);
newFruits.set(pineapples,400);
newFruits.set(mangoes,600);

console.log(newFruits.get(pineapples));




const fruitsIs = [
  {name:"grapes", quantity : 300},
  {name:"strawberry", quantity : 200},
]

function callback({quantity}) {
  return quantity > 100;"fine";"low";
}
const result = Map.groupBy(fruitsIs,callback);
console.log(result);




const person = {
  firstName : "Gargi",
  lastName : "Singh",
  age : 21
};
let{firstName,age,lastName} = person;
console.log(person);


const person1 = {
  firstName1 : "Gargi",
  lastName1 : "Singh",
  age1 : 21,
};
let{firstName1,age1,lastName1,country="india"} = person1;
console.log(person1);


let names = "kednriyavidyalaya";
let[a1,a2,a3,a4,a5,a6] = names;
console.log(a2,a2,a3,a4,a5,a6);


const vegies = ["bhindi","gajar","matar","aaloo","paneer"];
let{[0]:ladyfinger,[1]:carrot} = vegies;
console.log(vegies);

const nums = [1,23,4,5,6,8,9,10];
const[a,b,...rest] = nums;
console.log(a);
console.log(b);
console.log(rest);


let x = 2;
let z = x**2;
console.log(z);
let y = Math.pow(x,4);
console.log(y);




