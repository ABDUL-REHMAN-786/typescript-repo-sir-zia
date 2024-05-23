// nested object

type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}

/*
# Nested Objects

[Declare and Type a nested Object in TypeScript]
(https://bobbyhadz.com/blog/typescript-type-nested-object)
*/