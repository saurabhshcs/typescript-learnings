// Part 1
function someFn(myArgument) {
    if (typeof myArgument === 'string') {
        let x = myArgument.toLocaleUpperCase();
    }
    else if (typeof myArgument === 'number') {
        myArgument.toFixed();
    }
    else {
        myArgument;
    }
}
function isDog(someObj) {
    return typeof someObj.bark !== 'undefined';
}
function callMyPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
// Part 3
class Foo {
    constructor() {
        this.foo = 0;
        this.commonProp = '';
    }
}
class Bar {
    constructor() {
        this.bar = 0;
        this.commonProp = '';
    }
}
function fooBarFunction(obj) {
    if (obj instanceof Foo) {
        obj.foo;
    }
    else {
        obj.bar;
    }
}
