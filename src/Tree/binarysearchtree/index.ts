import { TreeNode } from "./treeNode";
import { BinarySearchTree } from "./binarySearchTree";

const rootNode = new TreeNode(50);
rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);

const BSTree = new BinarySearchTree(rootNode);

BSTree.insert(BSTree.head, 30);
BSTree.insert(BSTree.head, 20);
BSTree.insert(BSTree.head, 40);
BSTree.insert(BSTree.head, 70);
BSTree.insert(BSTree.head, 60);
BSTree.insert(BSTree.head, 80);

// BSTree.inOrderTraversal();
// BSTree.preOrderTraversal();
// BSTree.postOrderTraversal();
console.log(BSTree.search(BSTree.head, 71));
