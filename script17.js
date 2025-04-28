//Immediately invoked function 
//isme function calling aur definiton ek me hoti h
(function() {
  console.log("IIFE");
})();

//arrow iife
(() => {
  console.log("run rn");
})();


//Recursion
//function call krega khudko
//o/p = 0 0 1 2 jab console --nr ke neeche ho
//op = 3 2 1 0 jab console --nr ke just neeche ho
function getRecursive(nr){
  
  if(nr>0){
    getRecursive(--nr);
   }
   console.log(nr);
  }
getRecursive(3);



function longRecursive(nr){
  console.log("started function with:",nr)
  if(nr>0){
    longRecursive(nr-1);
   }
   else{
   console.log("get recursive")
   }
   console.log("ended function with",nr);
  }
longRecursive(3);



//nested fucntion
function outerFunction(nr){
 console.log("outer function");
  innerFunction(nr);
    function innerFunction(x){
    console.log(x*5);
    console.log(nr)
  }
}
outerFunction(2);


//Anonymous Function
function doAnonymous(){
  console.log("hnji ")
}



//FUCNTION CALLBACKS
let functionVariable = function(){
  console.log("not so good though");
};

//functionVariable()

function doVariableStuff(executeStuff) {
  executeStuff();
  console.log("inside do variable stuff");

}

doVariableStuff(functionVariable);

let youGotThis = function(){
  console.log("keep coding");

};
//setTimeout(youGotThis,3000);
setInterval(youGotThis,1000);


//Quiz
//1
let val = 10;
function tester(val){
  val +=10;
  if(val > 100){
    return tester(val);
  }
  return val;
}
tester(val);
console.log(val);

//2
let test2 = (num) => num + 5;
console.log(test2(6));