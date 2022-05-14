export class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
