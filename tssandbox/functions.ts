function getSum(num1:number, num2:number):number{
    // Returns Error
    // return 'Hello';
    return num1+num2;
}

// console.log(getSum(1,4));

let mySum=(num1:any ,num2 :any):number=>{
    if(typeof num1=='string'){
        num1 =parseInt(num1);
    }
    if(typeof num2=='string'){
        num2 =parseInt(num1);
    }
    return num1+num2;
}
console.log(mySum(3,5));
// Returns a number
console.log(mySum('3',5));

function getName(firstName:string,lastName?:string):string{
    if (lastName==undefined){
        return firstName;
    }
    return firstName +''+ lastName;
}
//Returns just John
console.log(getName('John'));
console.log(getName('John','Doe'));

function myVoid1(): void{
    return ;
}