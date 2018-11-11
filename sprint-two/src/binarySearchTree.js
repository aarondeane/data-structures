var BinarySearchTree = function(value) {
  // Create the object
  var newBinaryTree = {};
  
  newBinaryTree.value = value;
  
  newBinaryTree.left = {};
  newBinaryTree.right = {};
  
  newBinaryTree.insert = function(currVal){
    var newBranch = BinarySearchTree(currVal);

      if (currVal > this.value) {
        if (Object.keys(this.right).length === 0) {
          this.right = newBranch;
        } else {
          this.right.insert(currVal);
        }
      } else {
        if (Object.keys(this.left).length === 0) {
          this.left = newBranch;
        } else {
          this.left.insert(currVal);
        }
      }
  };
  
  newBinaryTree.contains = function(currVal){

    if (currVal === this.value) {
      return true;
    }
    
    if (currVal < this.value) {
      if (Object.keys(this.left).length !== 0) {
        return this.left.contains(currVal);
      } else {
        return false;
      }
    }
     
    if (currVal > this.value) {
      if (Object.keys(this.right).length !== 0) {
        return this.right.contains(currVal);
      } else {
        return false;
      }
    }
    
  };
  
  newBinaryTree.depthFirstLog = function(func) {
    func(this.value);
    
    if(Object.keys(this.left).length !== 0) {
      this.left.depthFirstLog(func);
    }
    
    if(Object.keys(this.right).length !== 0) {
      this.right.depthFirstLog(func);
    }
       
    
  };
 
  return newBinaryTree;
};





















/*
 * Complexity: What is the time complexity of the above functions?
 */
