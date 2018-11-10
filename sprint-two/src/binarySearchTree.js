var BinarySearchTree = function(value) {
  // Create the object
  var newBinaryTree = {};
  
  newBinaryTree.value = value;
  
  //newBinaryTree.children = [];
  newBinaryTree.left = {};
  newBinaryTree.right = {};
  
  newBinaryTree.insert = function(currVal){
    //First check to see how many children the top node has
    //If left and right are empty    
    if (this.left === undefined && this.right === undefined) {
      // Check whether what is being inserted is <> current node value left/right
      if (currVal > this.value) {
        this.left = BinarySearchTree(currVal);
      } else {
        // insert into left
      }
    }
    
      
    // If there is between 0 and 1 child
      
      // and if left or right spot is occupied depending on the result
        //if it's empty insert
        //if it's not empty drill down to the next node level and repeat from top
    // Else there must be two children in the current node so... 
    // drill down to next node level and repeat from top

  };
  newBinaryTree.contains = function(){};
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