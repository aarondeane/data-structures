var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Create a var for new child and insantiate and instance(value)
  var newChild = Tree(value);
  // if this.children has no length
  this.children.push(newChild);
  
};

treeMethods.contains = function(target) {
  // Check top level tree object for target value
  if (this.value === target) {
    return true;
  }
  
  // If there are children, iterate through children
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].contains;
    }
    // call contains on the child object
  }
  //
  return false;
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */