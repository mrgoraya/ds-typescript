import { TreeNode } from "./treeNode";

export class BinarySearchTree {
  head: TreeNode | null;

  constructor(head?: TreeNode) {
    this.head = head || null;
  }

  // insert element at end of the tree
  insert(node: TreeNode | null = this.head, value: number): TreeNode {
    if (node === null) {
      const root = new TreeNode(value);
      return root;
    } else {
      if (value < node.data) {
        node.left = this.insert(node.left, value);
      } else {
        node.right = this.insert(node.right, value);
      }
      return node;
    }
  }

  search(node: TreeNode | null = this.head, value: number): TreeNode | null {
    const temp = node;

    if (temp === null) {
      return null;
    } else if (temp.data === value) {
      return temp;
    } else {
      if (value < temp.data) {
        return this.search(temp.left, value);
      } else {
        return this.search(temp.right, value);
      }
    }
  }

  // return element in order
  inOrderTraversal(root: TreeNode | null = this.head): void {
    const temp = root;
    if (temp !== null) {
      this.inOrderTraversal(temp.left);
      console.log(temp.data);
      this.inOrderTraversal(temp.right);
    }
  }

  preOrderTraversal(root: TreeNode | null = this.head): void {
    const temp = root;
    if (temp !== null) {
      console.log(temp.data);
      this.inOrderTraversal(temp.left);
      this.inOrderTraversal(temp.right);
    }
  }

  postOrderTraversal(root: TreeNode | null = this.head): void {
    const temp = root;
    if (temp !== null) {
      this.inOrderTraversal(temp.left);
      this.inOrderTraversal(temp.right);
      console.log(temp.data);
    }
  }
}
