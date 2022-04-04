import { SingleListNode } from "./singleListNode";

export class SingleLinkedList {
  public head: SingleListNode | null;
  public tail: SingleListNode | null;
  public length: number;

  /**
   * create a new node and assign it to head if data is not null
   * @param data
   */
  constructor(data: number) {
    if (data) {
      const headNode = new SingleListNode(data);
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

  private linkLast(data: number): void {
    let newNode = new SingleListNode(data);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * Insert specified element to the end of the LinkedList
   * @param data
   */
  add(data: number): boolean {
    this.linkLast(data);
    return true;
  }

  /**
   * add the node in the beginning of the LinkedList
   * @param data
   */
  addFirst(data: number): void {
    if (this.isEmpty()) {
      this.head = this.tail = new SingleListNode(data);
    } else {
      let tempNode = this.head;
      this.head = new SingleListNode(data);
      this.head.next = tempNode;
    }
    this.length++;
  }

  /**
   * add the node in the last of the linkedList
   * @param data
   */
  addLast(data: number): void {
    this.linkLast(data);
  }

  /**
   * add a node at provided index with data
   * @param data
   * @param index
   */
  addAt(data: number, index: number): void {
    if (index < 0 || index > this.length)
      throw new Error("Illegal index number");
    if (index === 0) this.addFirst(data);
    else if (index === this.length) this.linkLast(data);
    else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }
      const newNode = new SingleListNode(data);
      const tempNode = currentNode!.next;
      newNode.next = tempNode;
      this.length++;
    }
  }

  /**
   * add the list of element to the linked list after the provided node
   * @param startNode is the staring node from which the list will be get added
   * @param list list of element
   */
  private addFrom(startNode: SingleListNode, list: number[]): void {
    if (!list) throw new Error("NullPointerException");
    if (!startNode) {
      for (let elem of list) {
        this.linkLast(elem);
      }
    } else {
      for (let elem of list) {
        const newNode = new SingleListNode(elem);
        let tempNode = startNode.next;
        startNode.next = newNode;
        newNode.next = tempNode;
        startNode = newNode;
        this.length++;
      }
    }
  }

  /**
   * add all the element to the end of the linked list
   * @param list list of element
   */
  addAll(list: number[]): boolean {
    if (!list) throw new Error("NullPointerException");
    for (let content of list) {
      this.linkLast(content);
    }
    return true;
  }

  /**
   * add the list of element to the linked list from the provided index
   * @param index starting index for insertion
   * @param list list of element
   */
  addAllFrom(index: number, list: number[]): boolean {
    if (!list) throw new Error("NullPointerException");
    if (index < 0 || index > this.length) throw new Error("Illegal argument");

    if (index === 0) {
      this.addFirst(list[index]);
      list.splice(0, 1);
    } else if ((index = this.length)) {
      return this.addAll(list);
    }
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode!.next;
    }
    this.addFrom(currentNode!, list);
    return true;
  }

  /**
   * @return the value of first node if it exists.
   */
   peekFirst(): number {
    if (this.isEmpty()) throw new Error("The LinkedList is empty");
    return this.head!.data;
  }

  /**
   * @return the value of last node if it exists.
   */
   peekLast(): number {
    if (this.isEmpty()) throw new Error("The LinkedList is empty");
    return this.tail!.data;
  }

  /**
   * delete the first node of the linked list
   */
  deleteFirst(): number {
    if(this.isEmpty()) throw new Error("The list is empty");

    const data = this.head!.data;
    this.head = this.head!.next;
    this.length--;

    // if(this.isEmpty()) this.tail = null;
    return data;
  }

  /**
   * delete the last node of the linked list
   */
  deleteLast(): number {
    if (this.isEmpty()) throw new Error("The list is empty");

    let currentNode = this.head;
    let previousNode = null;
    while(currentNode!.next){
      previousNode = currentNode;
      currentNode = currentNode!.next;
    }

    const data = currentNode!.data;
    previousNode!.next = null;
    this.tail = previousNode;
    this.length--;

    return data;
  }

  /**
   * delete the first node contains with data
   * @param data
   */
  deleteWith(data: number): void {
    let currentNode = this.head;
    let previousNode = null;

    while(currentNode!.next) {
      if (currentNode!.data === data) {
        if (previousNode === null) {
          this.head = currentNode!.next;
        } else {
          previousNode = currentNode!.next;
        }
        this.length--;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode!.next;
    }

    if (currentNode!.data === data) {
      previousNode!.next = null;
      this.length--;
      return;
    }
    throw new Error("Node not found");
  }

  /**
   * delete the node at provided index
   * @param index
   */
   deletAt(index: number): number{
    if (index < 0 || index >= this.length) throw new Error("Illegal argument");
    if (index === 0) return this.deleteFirst();
    else if (index === this.length - 1) return this.deleteLast();
    else {
      let preViousNode = null;
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        preViousNode = currentNode;
        currentNode = currentNode!.next;
      }
      const data = currentNode!.data;
      preViousNode!.next = currentNode!.next;
      this.length--;
      return data;
    }
  }

  /**
   * check the data present in the linkedList or not
   * @param data 
   */
   contains(data: number): boolean{
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === data) return true;
      currentNode = currentNode.next
    }
    return false;
  }

  /**
   * clear the linked list
   */
   clear(): boolean{
    let node: SingleListNode = this.head!;
    while(node){
      let next: SingleListNode = node.next!;
      node.data = null as never;
      node.next = null as never;
      node = next;
    }
    
    this.length = 0;
    return true;
  }

  print(): void {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}
