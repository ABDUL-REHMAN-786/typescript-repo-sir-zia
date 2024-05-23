// assinnability error

let message = "Hello World";
message = 6;
console.log(message);



/*
# Syntax Error

		tsc app.ts

The Output:

		app.ts:2:1 - error TS2322: Type 'number' is not assignable
		 to type 'string'.

		2 message = 6;
		
		Found 1 error in app.ts:2



*/