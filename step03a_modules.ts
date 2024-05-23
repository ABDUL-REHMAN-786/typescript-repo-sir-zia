//frist file app.ts
import a from "./main";
import {b, c as d} from "./index";

console.log(a + b + d);

//second file main.ts
let a = 5;

export default a;

//third file index.ts
export const b = 10;

export const c = 2;

/*
# Modules in TypeScript

[Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)

[ECMAScript Modules in Node.js](https://www.typescriptlang.org/docs/handbook/esm-node.html)

When we transpile this program it runs correctly.

However, note that the transpiled JavaScript code doesnot use
the ES Module sytax but rather the old commonjs syntax.*/


