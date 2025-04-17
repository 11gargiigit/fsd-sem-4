// function sayHello(){
//   let you = prompt("whats your name ?");
//   console.log("hello", you + "!");
// };

// let varContainingFunction = function() {
//   let varInFunction = "I am in a function.";
//   console.log("hi there", varInFunction);
// };

// varContainingFunction();

// function tester(para1,para2){
//   return para1 + " " + para2;
// }
// const arg1 = "argument1";
// const arg2 = "argument2";
// console.log(tester(arg1,arg2));
// console.log(tester())

// function addTwoNumbers(x,y){
//   let a  = parseInt(prompt("enter numbers : "));
//   let b = parseInt(prompt("another number : "))
//   console.log(a + b) ;
// // }

// addTwoNumbers();

// function addTwoNumbers(){
//   console.log(x + y);
// }

// addTwoNumbers(); 
// //default end me hona chhahiye trailing hona chahiye jisse user kp confusion na ho
// addTwoNumbers(13,15);
// addTwoNumbers(10);
// addTwoNumbers(1,5,6,9);


// let doingArrowStuff = x => console.log(x);
// doingArrowStuff(10);

//let and const act same

// const arr = ["swuirrel","owl","buddy"];
// arr.forEach( e => console.log(e));

//function operator :
// 1) SPREAD operator - teen dot ki shuruwaat se brackete hat jaata h first arr ka wrna bracket bhi aata h

// let spread = ["gargi","gauri","mayank"];
// let message = ["is","sister", ...spread,"and","very"];
// console.log(message);

// function addFourNumbers(x,y,z,w) {
//   console.log(x + y + z +w);
// }
// let arr = [4,7];
// let arr2 = [3,6];
// addFourNumbers(...arr, ...arr2);

// 2) REST OPERATOR - array ki jagah parameter me teen dot lgayenge

// function somefunction(param1,...param2){
//   console.log(param1,param2)
// }
// somefunction("hi","hello","offo");

// let result = addTwoNumbers(4,);
// console.log(result);

// let resultArr = [];
// for(let i = 0; i < 10; i++){
//   let resultArr = addTwoNumbers(i, 2*i);
//   resultsArr.push(result)
// }
// console.log(resultsArr);

// let addTwoNumbers = (x,y) => x + y;
// let res = addTwoNumbers(12,56);
// console.log(res);

// let addTwoNumbers = (x,y) => {
//   console.log("Adding...");
//   return x + y;
// }
// addTwoNumbers(16,89);


//local variable - let and var; these can overwrtite global variable
// let and const same trh se work krta h
//let me u can reassign but not redeclare
//const me na reassign na redeclare
//var can be redeclared not reassigned**
//global variable ARE AT TOP OF CODE and are available throughout the code and written without curly brackets.


// function test(x){
//   console.log("available",x);
// }

// test("hi");
// console.log("unavailabe", x);

// function testa(){
//   let y = "hello";
//   console.log("avail",y);
// }

// testa("ola");
// console.log("unavail",y);

// function doingStuff(){
//   if(true){
//     let x = "local";
//     console.log(x) //reference error
//   }
//   console.log(x);
// }
// doingStuff();

// function doingStuff(){
//   if(true){
//     console.log(x);
//     let x = "hio" //reference error
//     var x = "ho"; //undefined
//   }
// }
// doingStuff();

// function doingStuff(){
//   if(true){
//     console.log(x);
//     const x = "hio" //reference error
    
//   }
// }
// doingStuff();

let globalvar = ("everywhere");
console.log("outside",globalvar);

function createNewSCope(){
  console.log("access to global",globalvar);
}

createNewSCope("same");
console.log("still there",globalvar);

 //Agar global ki visiblity ko hide krna h toh usi scope me ek local variable of same name ko create krdo.

 let x = "hi";
 function testing(){
  let x = "hello";
  console.log(x);//local print hoga
 }
testing();
console.log(x);//global print hoga

let x1 = "global";

function verify(x1){
  console.log(x1)
}
verify("parameter"); //koi frk ni pdta global ho ya na ho agar fucntion se jud gya toh value function ki chalegi bss

function confuseReader(){
  x = "hi"; //act as global kyuki kuch declaration diye ni h
  console.log("nhi na");
}

confuseReader();
console.log("out",x);