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
  var newChild = Tree(value);
  this.children.push(newChild);
  
};

treeMethods.contains = function(target) {
  var results = false;

  if (this.value === target) {
    results = true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true; 
      } 
    }
  }
  //
  return results;
  
};


// 


/*
 * Complexity: What is the time complexity of the above functions?
 */