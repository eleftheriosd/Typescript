function getSum(num1, num2) {
    // Returns Error
    // return 'Hello';
    return num1 + num2;
}
// console.log(getSum(1,4));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num1);
    }
    return num1 + num2;
};
console.log(mySum(3, 5));
// Returns a number
console.log(mySum('3', 5));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + '' + lastName;
}
//Returns just John
console.log(getName('John'));
console.log(getName('John', 'Doe'));
function myVoid1() {
    return;
}
