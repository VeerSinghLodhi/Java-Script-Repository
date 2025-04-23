
// Parent constructor function
function Animal(name){
    this.name=name;
};

Animal.prototype.SayHello=function(){
    console.log("Hello, I am "+this.name);
};

// Child constructor function (inherits from Animal)
function Dog(name,breed){
    Animal.call(this,name);
    this.breed=breed;
};

// Inherit methods from Animal
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

// Child class method
Dog.prototype.bark=function(){
    console.log(this.name+" says woof!");
};

let dog=new Dog("Buddy","Golden Retriever");
dog.SayHello();
dog.bark();