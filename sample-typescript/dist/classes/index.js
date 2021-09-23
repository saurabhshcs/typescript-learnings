class Cat {
    constructor(name, group) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
}
const cat = initializeAnimal(Cat, 'Felix');
const dog = initializeAnimal(Dog, 'Ava');
