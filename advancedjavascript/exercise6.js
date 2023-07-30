//Evaluate these:
//#1
[2] === [2]; // É falso
// {} === {} // Não pode comparar os dois

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 5
const object2 = object1; // 5
const object3 = object2; // 5
const object4 = { a: 5 }; // 5
object1.a = 4; // Todos os objetos exceto o object4 serão = 4 por que eles são passados por referência (guardados no valor de memória do objeto que foi passado a eles).

//#3 create two classes: an Animal class and a Mamal class.
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(`Mooooo I'm ${this.name}, I'm a ${this.color} ${this.type}!`);
  }
}

// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
const cow = new Mamal("Bella", "cow", "brown");
