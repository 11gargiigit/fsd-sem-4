//protoype mechanism helps to facilitates inheritance and the sharing of properties and methods among objects.

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.introduce = function () {
  console.log("hi, I'm ", this.firstname);
}

Person.prototype.favouriteColor = "yellow";
let p = new Person("mayank","gauri");
console.log(p.favouriteColor);
p.introduce();


