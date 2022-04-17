export class DoubleListNode {
  data: number | null;
  next: DoubleListNode | null;
  prev: DoubleListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
