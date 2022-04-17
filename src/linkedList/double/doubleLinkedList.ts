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
  /**
   * swap head and next node
   * @returns void
   */
  swapHeadAndNextToIt(): void {
    if (!this.head) throw new Error("The list is empty");

    if (this.length === 1) {
      console.log("The length of list is one, cannot swap");
    } else {
      let tempNode = this.head!.next;

      this.head!.next = tempNode!.next;
      tempNode!.next!.prev = this.head;
      tempNode!.next = this.head;
      this.head!.prev = tempNode;
      tempNode!.prev = null;
      this.head = tempNode;
    }
  }

  /**
   * swap head and other node
   * @param val the value to swap the head with
   * @returns void
   */
  swapHeadWithOtherNode(val: number): void {
    const index = this.indexOf(val);
    if (index === -1) throw new Error("Illegal index number");
    if (index + 1 === this.length) {
      console.log("cannot swap with tail");
    } else {
      let j = 0;
      let swapNode = this.head;
      while (j < index) {
        swapNode = swapNode!.next;
        j++;
      }

      const tempNode = this.head!.next;

      this.head!.next = swapNode!.next;
      swapNode!.next!.prev = this.head;

      swapNode!.next = tempNode;
      tempNode!.prev = swapNode;

      this.head!.prev = swapNode!.prev;
      swapNode!.prev!.next = this.head;
      swapNode!.prev = null;
      this.head = swapNode;
    }
  }

  /**
   * swap head with tail
   * @returns void
   */
  swapHeadAndTail(): void {
    if (this.isEmpty()) throw new Error("The list is empty");
    if (this.length === 1) {
      console.log("The list contains only head.");
    } else {
      const tempNode = this.tail;

      this.head!.prev = this.tail!.prev;
      this.tail!.prev!.next = this.head;
      this.tail!.next = this.head!.next;
      this.head!.next!.prev = this.tail;

      this.tail!.prev = null;
      this.head!.next = null;

      this.head = tempNode;
      this.tail = this.head;
    }
  }

  /**
   * swap center two nodes
   * @param value1 value 1
   * @param value2 value 2
   * @returns void
   */
  swapCenterTwoNodes(value1: number, value2: number): void {
    if (this.isEmpty()) throw new Error("The list is empty");
    if (this.length === 1) {
      console.log("The list contains only head.");
    } else {
      const index1 = this.indexOf(value1);
      const index2 = this.indexOf(value2);

      let j = 0;
      let node1 = this.head;
      while(j < index1) {
        node1 = node1!.next;
        j++;
      }

      let k = 0;
      let node2 = this.head;
      while(k < index2) {
        node2 = node2!.next;
        k++;
      }

      if (node1!.prev !== null && node2!.next !== null && node1!.next === node2) {
        node1!.next = node2!.next;
        node2!.next!.prev = node1;

        node2!.prev = node1!.prev;
        node1!.prev!.next = node2;

        node1!.prev = node2;
        node2!.next = node1;
      } else {
        throw new Error("It is only used for middle element.");
      }
    }
  }

  /**
   * swap two nodes that are not next to eachother
   * also not head and tail
   * @param value1 value 1
   * @param value2 value 2
   * @returns void
   */
  swapTwoNodes(value1: number, value2: number): void {
    if (this.isEmpty()) throw new Error("The list is empty");
    if (this.length === 1) {
      console.log("The list contains only head.");
    } else {
      const index1 = this.indexOf(value1);
      const index2 = this.indexOf(value2);

      let j = 0;
      let node1 = this.head;
      while(j < index1) {
        node1 = node1!.next;
        j++;
      }

      let k = 0;
      let node2 = this.head;
      while(k < index2) {
        node2 = node2!.next;
        k++;
      }

      if (node1!.prev !== null && node2!.next !== null && node1!.next !== node2) {
        const tempNodePrev = node1!.prev;
        const tempNodeNext = node1!.next;

        node1!.next = node2!.next;
        node2!.next!.prev = node1;
        node1!.prev = node2!.prev;
        node2!.prev!.next = node1;

        node2!.next = tempNodeNext;
        tempNodeNext!.prev = node2;
        node2!.prev = tempNodePrev;
        tempNodePrev!.next = node2;
      } else {
        throw new Error("It should not used for middle element.");
      }
    }
  }
}
