import { Queue } from "./queue";

const queue = new Queue(1);
// console.log(queue.size())
queue.add(2);
// console.log(queue.print());
console.log(queue.pop());