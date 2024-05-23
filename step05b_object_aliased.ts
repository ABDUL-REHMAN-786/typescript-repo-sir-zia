//object aliased

// anonymous
let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}
let student: Student = {
    name: "Hira",
    age: 30
}
console.log(student["name"]);
console.log(student.age);

// Interfaces
interface Manager {
    name: string,
    subordiates?: number
}
let storeManager: Manager = {
    name: "Bilal"
}

/*
# Object Types

[Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

[Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)


[Type vs. Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
*/