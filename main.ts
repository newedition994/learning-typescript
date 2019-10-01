export {};
let message = "Welcome back";
console.log(message);

// Variable Declarations
let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

//Variable Types
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

let myVariable: unknown = 10;

// overrides the errors when you change any to unknown
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}
//(myVariable as string).toUpperCase();

// can have multiple variable types
let multiType: number | boolean;
multiType = 20;
multiType = true;

// Functions
function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}
add(5, 10);
add(5);

// Interface
interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne"
};

fullName(p);

// Classes & Access Modifiers
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Mike");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
