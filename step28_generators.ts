// generators

//Execution of a generator is paused till the next iteration is invoked

function *generatorFn(): string{
    //first task
    yield "firstValue";
 
    //second task
    yield "secondValue";
 
    //third task
    yield "thirdValue";
}


var generator = generatorFn();
var next = generator.next();
while(!next.done){
    console.log(next.value);
    next=generator.next();
}

/*
Read:
https://github.com/Microsoft/TypeScript/issues/2873

http://www.dotnetcurry.com/javascript/1131/ecmascript6-async-using-generators-promises
*/
