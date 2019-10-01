export {};
let message = "Welcome back";
console.log(message);

// variable declarations
let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

//variable types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Mike";

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// interchangable syntax for arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Chris", 22]; // the order of the value must match the order of the types

enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
console.log(c);

// Any type for a variable => similar to typeUnknown in Typescript update
let randomValue: any = 10;
randomValue = true;
randomValue = "Mike"; // does not give a compiler error

let myVariable: any = 10;

// overrides the errors when you change any to unknown
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}
(myVariable as string).toUpperCase();
