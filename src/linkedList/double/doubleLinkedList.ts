import { DoubleListNode } from "./doubleListNode";

export class DoubleLinkedList {
  head: DoubleListNode | null;
  tail: DoubleListNode | null;
  length: number;

  /**
   * create a new node and assign it to head if data is not null
   * @param data
   */
  constructor(data: number | null) {
    if (data) {
      const headNode = new DoubleListNode(data);
      this.head = headNode;
      this.tail = headNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  /**
   * @return true if the length of the linkedList is 0
   */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /*****************************************************************************
                                  INSERTION
  *****************************************************************************/
  /**
   * Adds node to the head of the linked list - O(1)
   * @param {number} data - value to add to list
   * @return {void}
   */
  addFront(data: number): void {
    if (this.isEmpty()) {
      this.head = this.tail = new DoubleListNode(data);
    } else {
      const newNode = new DoubleListNode(data);
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Adds node to the tail of the linked list - O(1)
   * @param {number} data - value to add to list
   * @return {void}
   */
  addLast(data: number): void {
    if (this.isEmpty()) {
      this.head = this.tail = new DoubleListNode(data);
    } else {
      const newNode = new DoubleListNode(data);
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Adds a node at specified index - O(n)
   * @param {number} index - index
   * @param {number} data - value to add to list
   * @return {void}
   */
  addAt(data: number, index: number): void {
    if (index < 0 || index > this.length)
      throw new Error("Illegal index number");
    if (index === 0) {
      this.addFront(data);
    } else if (index === this.length) {
      this.addLast(data);
    } else {
      let currentNode = this.head;
      // traverse to index
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }

      let newNode = new DoubleListNode(data);
      currentNode!.next!.prev! = newNode;
      newNode!.next = currentNode!.next!;

      newNode!.prev = currentNode;
      currentNode!.next = newNode;
      this.length++;
    }
  }

  /*****************************************************************************
                                  ACCESSING
  *****************************************************************************/
  /**
   * Gets the value of head - O(1)
   * @returns {number} value of head
   */
  peekFront(): number | null {
    if (!this.isEmpty()) {
      return this.head!.data!;
    }
    return null;
  }

  /**
   * Gets the value of tail - O(1)
   * @returns {number} value of tail
   */
  peekLast(): number | null {
    if (!this.isEmpty()) {
      return this.tail!.data;
    }
    return null;
  }

  /**
   * Gets the element at index - O(n)
   * @param {number} index - index of element
   * @returns {number} value of element at index i
   */
  getAt(index: number): number | null {
    if (index < 0 || index > this.length)
      throw new Error("Illegal index argument");

    if (index === 0) {
      return this.head!.data;
    } else if (index + 1 === this.length) {
      return this.tail!.data;
    } else if (index > 0 || index < this.length) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode!.next;
      }
      return currentNode!.data;
    } else {
      return null;
    }
  }

  /*****************************************************************************
                                  SEARCHING
  *****************************************************************************/

  /**
   *
   * @param {number} data - data to search for
   * @return {number} the index of the first occurence of the element, and -1
   * if the element does not exist.
   */
  indexOf(data: number): number {
    if (this.isEmpty()) return -1;

    let i = 0;
    let currentNode = this.head;
    while (!(currentNode!.data === data)) {
      if (!currentNode!.next) return -1;

      currentNode = currentNode!.next;
      i++;
    }
    return i;
  }

  /**
   * Checks if data is in linked list.
   * @param {number} data  - data to search for
   * @returns {boolean}
   */
  contains(data: number): boolean {
    const index = this.indexOf(data);
    return index != -1;
  }

  /**
   * print all the data in Linked List
   */
  print(): void {
    while (this.head != null) {
      console.log(this.head!.data);
      this.head = this.head!.next;
    }
  }

  /*****************************************************************************
                                  DELETION
  *****************************************************************************/
  /**
   * Removes head - O(1)
   * @return {number} - value of removed head
   */
  removeFront(): number | null {
    if (!this.head) return null;
    const val = this.head.data;

    if (this.head!.next) {
      this.head.next.prev = null;
      this.head = this.head.next;
      this.length--;
    } else {
      this.head = null;
    }
    return val;
  }

  /**
   * Removes tail - O(1)
   * @return {number} - value of removed head
   */
  removeLast(): number | null {
    if (!this.head) return null;

    const val = this.tail!.data;

    if (!this.tail!.next) {
      this.tail!.prev!.next = null;
      this.tail = this.tail!.prev;
      this.length--;
    } else {
      this.tail = this.head = null;
    }
    return val;
  }

  /**
   * Removes node at specified index- O(n)
   * @param {number} i - index to remove
   * @return {T} - value of removed node
   */
  removeAt(index: number): number | null {
    if (index < 0 || index > this.length)
      throw new Error("Illegal index number");

    if (index === 0) {
      return this.removeFront();
    } else if (index === this.length - 1) {
      return this.removeLast();
    } else {
      let j = 0;
      let currentNode = this.head;

      // traverse to node to be deleted
      while (j < index) {
        currentNode = currentNode!.next;
        j++;
      }

      // delete node
      currentNode!.prev!.next = currentNode!.next;
      currentNode!.next!.prev = currentNode!.prev!;
      this.length--;

      return currentNode!.data;
    }
  }

  /**
   * Removes first occurence of node with specified value. Returns true if
   * removal was successful, and false otherwise. - O(n)
   * @param {number} val - value to remove
   * @returns {number} - value of removed node
   */
  remove(val: number): number | null {
    const index = this.indexOf(val);
    if (index === -1) return null;

    return this.removeAt(index);
  }

  /**
   * Deletes all nodes - O(1)
   */
   clear(): void {
    this.head = this.tail = null;
    this.length = 0;
  }

  /*****************************************************************************
                                  SWAPPING
  *****************************************************************************/
}
