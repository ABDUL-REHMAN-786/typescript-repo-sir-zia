// class_expressions.

//Similar to class declarations, class expressions allow you to create new classes.  
//Unlike class declarations, you can use class expressions wherever you use an expression.  
//For example, you can now create a class and use it in your extends clause.

class StateHandler extends class { reset() { return true; } } {
    constructor() {
      super();
    }
 }
 
 var g = new StateHandler();
 g.reset();
 
 //This class can be anonymous and still has all the same capabilities of class declarations. 

 /*

 Read:
http://blogs.msdn.com/b/typescript/archive/2015/09/16/announcing-typescript-1-6.aspx

https://github.com/Microsoft/TypeScript/issues/497

https://github.com/Microsoft/TypeScript/pull/3516

*/
