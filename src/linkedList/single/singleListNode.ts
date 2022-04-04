export class SingleListNode {
  public data: number;
  public next: SingleListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}