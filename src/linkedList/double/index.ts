
import { DoubleLinkedList } from './doubleLinkedList';

const newDoubleList = new DoubleLinkedList(1);

// console.log(newDoubleList.isEmpty());
newDoubleList.addFront(2);
newDoubleList.addLast(3);
// console.log(newDoubleList.length);
// newDoubleList.addAt(4, 0);
// newDoubleList.print();
// console.log(newDoubleList.peekFront());
// console.log(newDoubleList.peekLast());
// console.log(newDoubleList.getAt(2));
// console.log(newDoubleList.indexOf(4));
// console.log(newDoubleList.contains(5));
// console.log(newDoubleList.removeFront());
// console.log(newDoubleList.removeLast());
// console.log(newDoubleList.length);
// console.log(newDoubleList.removeAt(1));
newDoubleList.clear();
console.log(newDoubleList.length);
