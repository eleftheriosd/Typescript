
//Basic Data types
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = 'Hello'+''+'Wolrd';
myNum= 22;
myBool=true;
myVar=5;

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);

myVar='hi';
console.log(myVar);
//Arrays

// One way to declare Arrays in TS
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

//Another way to declare Arrays in TS
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;
let strNumTuple:[string, number];

strArr=['Hello','World'];
numArr=[1,2,3];
boolArr=[true,false,true];
strNumTuple=['Hello',4];

console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(strNumTuple);

// Void,Null,Undefined
let myVoid: void=undefined;
let myNull: null=null;
let myUndefined: undefined=undefined;

console.log(myVoid)
console.log(myNull)
console.log(myUndefined)