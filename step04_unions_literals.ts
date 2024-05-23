// union literals

let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error

let myAge: string | number;

myAge = 16;//narrowing
console.log(myAge);

//console.log(myAge.toLowerCase());//Error

myAge = "Dont Know";//narrowing
console.log(myAge);

console.log(myAge.toString()); // common to both types 
                               //can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string 
                                //because of narrowing

let newAge = Math.random() > 0.6 ? "Khan": 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number


let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
//age = "living";//Error


let zia: "zia";

zia = "zia";
//zia = "khan";//Error


let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

if (yourName) {
    yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase();//OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;

/*
# Union Types

[Union Types Official Docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

[Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

[Narrowing Types in TypeScript](https://formidable.com/blog/2022/narrowing-types/)

[Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)

[Watch Null References: The Billion Dollar Mistake - Tony Hoare](https://www.youtube.com/watch?v=ybrQvs4x0Ps)

To avoid the Billion Dollar Mistake, in the tsconfig.json set [strictNullChecks](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictnullchecks) to true it will raise an error that you have not made a guarantee that the variable exists before trying to use it.

[Truthiness narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing)

[Type Aliases](https://www.geeksforgeeks.org/what-are-type-aliases-and-how-to-create-it-in-typescript/)

*/
