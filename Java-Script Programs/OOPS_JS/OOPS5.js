class Fruit{
    taste(){
        console.log("Every fruit is sweet.");
    }
}

class Lemon extends Fruit{
    taste(){
        console.log("But Lemons - This one is tangy.");
    }
}

class Apple extends Fruit{
    taste(){
        console.log("Apples are mostly sweet.");
    }
}

// Array like Object
let objects=[new Fruit,new Lemon,new Apple]

objects.forEach(fruit=>fruit.taste());


console.log("Polymorphism using Function Behavior on Different Objects - JavaScript functions can behave differently depending on the object they are used with.");


function describeShape(shape){
    shape.draw();
}

let circal={
    draw:function(){
        console.log("Drawing a Circle");
    }
};

let square={
    draw:function(){
        console.log("Drawing a Square");
    }
};

describeShape(circal)
describeShape(square);

function greet(name,title){
    if(title){
        console.log(`Hello ${title} ${name}`);
    }else{
        console.log(`Hello ${name}`);
    }
};

greet("Veer");
greet("Veer","Mr.");