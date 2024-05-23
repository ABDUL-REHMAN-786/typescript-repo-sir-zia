// abstract_classes


abstract class Base {
    foo(): number { return this.bar(); }
    abstract bar() : number;
}

class E extends Base { // okay -- implements abstract method
    bar() { return 1; }
}

var obj1 = new Base();//Error, cannnot create a instance of a Abstract class

console.log(obj1.foo());

/*
Read:

https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members
*/
