
console.log("Polymorphism via Method Overriding");
console.log("Different child classes override the same method from a parent class in their own way.");
console.log("-------------------------------");

class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}
class Cat extends Animal{
    speak(){
        console.log("Cat meows");
    }
}

let animals=[new Animal(),new Dog(),new Cat()];

animals.forEach(animal=>animal.speak());