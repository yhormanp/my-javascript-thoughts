/*
Task
The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, , pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the height of the binary search tree.

Input Format

The locked stub code in your editor reads the following inputs and assembles them into a binary search tree:
The first line contains an integer, , denoting the number of nodes in the tree.
Each of the  subsequent lines contains an integer, , denoting the value of an element that must be added to the BST.

Output Format

The locked stub code in your editor will print the integer returned by your getHeight function denoting the height of the BST.

Sample Input

7
3
5
2
1
4
6
7
Sample Output

3

There are  nodes in this path that are connected by  edges, meaning our BST's . Thus, we print  as our answer.
*/

// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function getHeight
  this.getHeight = function (root, indicator) {
    // Add your code here
    var height = 1;
    var height_left = -1;
    var height_right = -1;

    if (root.left) height_left = this.getHeight(root.left, 'left');

    if (root.right) height_right = this.getHeight(root.right , 'right');

    height += height_left > height_right ? height_left : height_right;
    console.log('value', height_left, height_right, height, indicator)
    return height;
  }; // End of function getHeight
} // End of function BinarySearchTree

function main() {
  var tree = new BinarySearchTree();
  var root = null;

  var values = [3, 5, 2, 1, 4, 6, 7];

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  console.log(tree.getHeight(root));
}

main();
