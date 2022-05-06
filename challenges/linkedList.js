/*
A Node class is provided for you in the editor. A Node object has an integer data field, , and a Node instance pointer, , pointing to another node (i.e.: the next node in the list).

A Node insert function is also declared in your editor. It has two parameters: a pointer, , pointing to the first node of a linked list, and an integer, , that must be added to the end of the list as a new Node object.

Task
Complete the insert function in your editor so that it creates a new Node (pass  as the Node constructor argument) and inserts it at the tail of the linked list referenced by the  parameter. Once the new node is added, return the reference to the  node.

Note: The  argument is null for an empty list.

Input Format

The first line contains T, the number of elements to insert.
Each of the next  lines contains an integer to insert at the end of the list.

Output Format

Return a reference to the  node of the linked list.

Sample Input

STDIN   Function
-----   --------
4       T = 4
2       first data = 2
3
4
1       fourth data = 1
Sample Output

2 3 4 1
*/



function Node(data) {
    this.data = data;
    this.next = null;
  }
  function Solution() {
    this.insert = function (head, data) {
      //complete this method
      let newNode = new Node(data);
      if (head === null || typeof head === 'undefined') {
        head = newNode;
      } else if (head.next === null) {
        head.next = newNode;
      } else {
        let tail = head.next;
        while (tail.next) {
          tail = tail.next;
        }
  
        tail.next = newNode;
      }
      return head
    };
  
    this.display = function (head) {
      var start = head;
      while (start) {
        console.log("data is", start.data);
        // process.stdout.write('data is ', start.data+" ");
        start = start.next;
      }
    };
  }
  function main() {
    const data = [2, 3, 4, 1];
    var head = null;
    var mylist = new Solution();
    for (i = 0; i < data.length; i++) {
      const value = data[i];
      head = mylist.insert(head, value);
      console.log("this is my list", head);
    }
  
    console.log("this is my final list", head);
  
    mylist.display(head);
  }
  
  main();