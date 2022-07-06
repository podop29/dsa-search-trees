class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /**Traverse a tree in order */
  traverse(node = this.root){
    if(node.left)this.traverse(node.left)
    console.log(node.val)
    if(node.right)this.traverse(node.right)
  }


  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root){ this.root = new Node(val); return this.root}
    let currentNode = this.root;
    while(currentNode){ 
      if(currentNode.val > val){
        if(currentNode.left){
          currentNode = currentNode.left
        }else{
          currentNode.left = new Node(val)
          return this.root

        }
      }
      else{
        if(currentNode.right){
          currentNode = currentNode.right
        }else{
          currentNode.right = new Node(val)
          return this.root

        }
      } 
    }


  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if(!this.root){ this.root = new Node(val); return this.root}

    if(node.val > val){
      if(node.left){
        this.insertRecursively(val,node.left)
      }else{
        node.left = new Node(val)
      }
    }

    if(node.val < val){
      if(node.right){
        this.insertRecursively(val,node.right)
      }else{
        node.right = new Node(val)
      }
    }
    return this.root

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.val === val) return currentNode;
      if(currentNode.val > val) currentNode = currentNode.left
      else currentNode = currentNode.right
    }
    return undefined

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(!node) return undefined
    if(node.val === val) return node;
 
      if(val < node.val){
        return this.findRecursively(val,node.left)
      }
      else{
        return this.findRecursively(val,node.right)
      }

  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, list = []) {

    function traverse(node){
      list.push(node.val);
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(node);
    return list
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, list = []) {

    function traverse(node){
      if(node.left) traverse(node.left)
      list.push(node.val);
      if(node.right) traverse(node.right)
    }
    traverse(node);
    return list
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, list = []) {

    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      list.push(node.val);

    }
    traverse(node);
    return list
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(root = this.root) {
    let queue = [root]
    let list = [];
    while(queue.length){
      let node = queue.shift()
      list.push(node.val)


      node.left && queue.push(node.left)
      node.right && queue.push(node.right)

    }
   
    return list

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

let binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(15)
    binarySearchTree.insert(20)
    binarySearchTree.insert(10)
    binarySearchTree.insert(12)
    binarySearchTree.insert(1)
    binarySearchTree.insert(5)
    binarySearchTree.insert(50)


console.log(binarySearchTree.bfs())

//binarySearchTree.traverse()

module.exports = BinarySearchTree;
