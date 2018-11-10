var BinarySearchTree = function(value) {
  // Create the object
  var newBinaryTree = {};
  
  newBinaryTree.value = value;
  
  //newBinaryTree.children = [];
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
  newBinaryTree.contains = function(){
    
  };
  newBinaryTree.depthFirstLog = function(){};
 
  return newBinaryTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// ed = {
//   value: 5,
//   left: {},
//   right: {}
// }

// binarySearchTree.insert(2);
// ed = {
//   value: 5,
//   left: {
//     {value: 2, 
//      left: {},
//      right: {},
//    }
//   },
//   right: {}
// }
// binarySearchTree.insert(3);
// ed = {
//   value: 5,
//   left: {
//     {value: 2, 
//      left: {},
//      right: {
//       {value: 3,
//        left: {},
//        right: {},
//      }
//     },
//    }
//   },
//   right: {}
// }


// binarySearchTree.insert(7);
// binarySearchTree.insert(6);
// expect(binarySearchTree.left.right.value).to.equal(3);
// expect(binarySearchTree.right.left.value).to.equal(6);