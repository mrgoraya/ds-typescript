import NewArray from "./array";

const numbers = new NewArray(3);
numbers.newArray();
numbers.push(10);
numbers.push(20);
numbers.push(30);
numbers.push(40);
numbers.push(50);
// numbers.remove(4);
// console.log(numbers.indexOf(100));
// console.log(numbers.max());
// console.log(numbers.intesect([10,20,40]))
// numbers.reverse();
console.log(numbers.addGivenIndex(1, 15));
// numbers.print();