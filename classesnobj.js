// CLASSES
// blueprint for object creation 

// OOPs reduces complexity and increases code security


// OBJECTS
// intializes class attributes at time of object creation

// class ClassName
// {
//     constructor(prop1,prop2)
//     {
//         this.prop1=prop1;
//     this.prop2=prop2;
//     // console.log(this.prop1);
//     // console.log(this.prop2);
//     }
// }

// let obj= new ClassName("arg1","agr2");
// console.log(obj.prop1);
// console.log(obj.prop2);


// 'THIS' KEYWORD REFERS TO THE OBJECT IT BELONGS TO SO IT IS FIRST PROPERTY OF THE INSTANCE OF CLASSNAME

// class Dog
// {
// constructor(dname,w,c,b)
// {
//     this.dname=dname;
//     this.w=w;
//     this.c=c;
//     this.b=b;
// }
// }

// let dog= new Dog("JS",2.4,"BROWN","PUG");
// console.log(dog.dname);
// console.log(dog.w);
// console.log(dog.c);
// console.log(dog.b);


// there can only be one constructor of the class


// class Person
// {
//     constructor(fname,lname)
//     {
//         this.fname=fname;
//         this.lname=lname;
//     }
// }

// let p= new Person("Maaike","yan Putten");
// // IF ONLY ONE ARGUMENT GIVEN THEN GIVES --- UNDEFINED


// // console.log("Hi",p.fname);

// console.log("Hi",p.fname,p.lname);





// DEFAULT ARGUMENTS

// class Person
// {
//     constructor(fname,lname="Doe")
//     {
//         this.fname=fname;
//         this.lname=lname;
//     }
// }

// let p= new Person("Maaike");

// console.log("Hi",p.fname,p.lname);




// METHODS

// FUNCTIONS--- WE DON'T USE FUNCTION KEYWORD. WE START DIRECTLY WITH NAME

// class Person
// {
//     constructor(fname,lname="Doe")
//     {
//         this.fname=fname;
//         this.lname=lname;
//     }

//     greet()
//     {
//         console.log("Hi!, I'm",this.fname);


//         // if this is not used gives undefined
//     }
// }

// let p= new Person("Maaike","Putten");
// p.greet();



// class Person
// {
//     constructor(fname,lname="Doe")
//     {
//         this.fname=fname;
//         this.lname=lname;
//     }
//     greet()
//     {
//         console.log("HELLO!!");
//     }

//     compliment(name,object)
//     {
//         return "That's a wonderful"+object+","+name;
//     }  
// }

// let p= new Person();
// let compliment=p.compliment("HARRY","HAT");
// console.log(compliment);



// p.greet();


// let x= p.greet();
// console.log(x);
// UNDEFINED


// [3] PROPERTIES



// HOW TO MAKE A VARIABLE "PRIVATE"
// class Person
// {
    // #fname;
    // #lname;
    // constructor(fname,lname)
    // {
    //     this.#fname=fname;
    //     this.#lname=lname;
    // }


//     constructor(fname,lname)
//     {
//         if(fname.startsWith("M"))
//         {
//             this.#fname=fname;
//         }
//         else
//         {
//             this.#lname=lname;
//         }
//     }
// }




// GETTERS AND SETTERS

// GET-- TO GET DATA
// SET TO RE-INITIALIZE


// class Person
// {
//     #fname;
//     #lname;
//     constructor(fname,lname)
//     {
//         this.#fname=fname;
//         this.#lname=lname;
//     }

//     get fname()
//     {
//         return this.#fname;
//     }

//     set fname(fname)
//     {
//         this.#fname=fname;
//     }

//     get lname()
//     {
//         return this.#lname;
//     }

//     set lname(lname)
//     {
//         this.#lname=lname;
//     }
// }

// let p = new Person("maria","Saga");
// console.log(p.fname);


// // calls getter method
// console.log(p.fname);

// // setter method
// p.fname="drishti";
// console.log(p.fname);




// INHERITANCE

// INHERITS THE PROPERTIES AND METHODS OF PARENT CLASS
// generalisation ---> specialisation


// class Vehicle
// {
//     constructor(color,currentSpeed,maxSpeed)
//     {
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }

//     move()
//     {
//         console.log("moving at",this.currentSpeed);
//     }

//     accelerate(amount)
//     {
//         this.currentSpeed+=amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color,currentSpeed,maxSpeed,fuel)
//     {

//         super(color,currentSpeed,maxSpeed);
//         // SUPER--> USED TO INVOKE PARENT CLASS CONSTRUCTOR


//         this.fuel=fuel;
//     }

//     doWheelie()
//     {
//           console.log("driving on a single wheel !");
//     }
// }

// let motor = new Motorcycle("Black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();
// TOTAL MEMORY= PARENT+CHILD;
 


//PROTOTYPES