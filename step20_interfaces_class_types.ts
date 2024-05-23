// interfaces_class_types

//One of the most common uses of interfaces in languages like C# and Java, 
//that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface  {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}


//Interfaces describe the public side of the class, rather than both the public and private side. 
//This prohibits you from using them to check that a class also has particular types for the private side of the class instance.


/*
Read:
http://www.typescriptlang.org/Handbook#interfaces-array-types
https://github.com/Microsoft/TypeScript/wiki/Interfaces
http://blogs.msdn.com/b/typescript/archive/2013/01/24/interfaces-walkthrough.aspx
*/
