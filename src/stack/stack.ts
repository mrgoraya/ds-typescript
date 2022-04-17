import { DoubleLinkedList } from "./../linkedList/double/doubleLinkedList";

export class Stack {
  private list: DoubleLinkedList;

  constructor(data: number | null) {
    this.list = new DoubleLinkedList(data);
  }

  /**
   * Returns size of stack - O(1)
   * @returns {number}
   */
  size(): number {
    return this.list.length;
  }

  /**
   * Returns true if stack is empty, false otherwise - O(1)
   * @returns {number}
   */
  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  /**
   * Deletes all elements in stack - O(1)
   */
  clear(): void {
    this.list.clear();
  }

  /**
   * Pushes element onto the stack - O(1)
   * @param {number} val - element to push on stack
   */
  push(val: number): void {
    this.list.addFront(val);
  }

  /**
   * Pops an element off the stack - O(1)
   * @returns {number} - Element which was popped off
   */
  pop(): number | null {
    if (this.isEmpty()) return null;
    return this.list.removeFront();
  }

  /**
   * Peeks at the top most element on the stack - O(1)
   * @returns {number} - Topmost element
   */
  peek(): number | null {
    if (this.isEmpty()) return null;
    return this.list.peekFront();
  }

  /**
   * Checks if value is in stack - O(n)
   * @param {number} val  - element to search for
   * @returns {boolean}
   */
  contains(val: number): boolean {
    return this.list.contains(val);
  }

  /**
   * print the stack elements
   * @returns {void}
   */
  print(): void {
    return this.list.print();
  }
}
