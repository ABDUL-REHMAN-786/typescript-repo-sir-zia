// async

// create file promise.ts

function delay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
  
  //Using `then`, `catch`, and `finally`:
  delay(1000)
    .then(() => {
      console.log('The delay is over');
    })
    .catch((error) => {
      console.error('Something went wrong:', error);
    })
    .finally(() => {
      console.log('This is always executed');
    });
  
  
  //Using `async/await`:  
  try {
      await delay(1000);
      console.log('Await: The delay is over');
  } catch (error) {
      console.error('Await: Something went wrong:', error);
  } finally {
      console.log('Await: This is always executed');
  }
  
  //Now Do Coding from the following Article
  //https://blog.logrocket.com/async-await-in-typescript/
  
  
  //Review the tutorial and convert the code in TypeScript
  //https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript  
    
    // create file callback.ts

    function myCallBack(text: string) {
        console.log("inside myCallback " + text);
    }
    
    function callingFunction(initialText: string, callback: (text: string) => void)
    {
        callback(initialText);
    }
    
    callingFunction("myText", myCallBack);

    /*
    # Async Functions

[Define Type for Function Callbacks in TypeScript](https://www.delftstack.com/howto/typescript/typescript-function-type/)


[Async Await in TypeScript]
(https://blog.logrocket.com/async-await-in-typescript/)

[Masterering Async]
(https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript)

*/