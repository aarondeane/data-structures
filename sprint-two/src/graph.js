

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  this[node].forEach(function(elem) {
    this.removeEdge(node, elem);
  }, this);
 
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  
  return this[fromNode].includes(toNode);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  // if statement, check for lack of index of toNode within fromNode
  if (this[fromNode].indexOf(toNode) < 0) {

      this[fromNode].push(toNode);
      this[toNode].push(fromNode);

  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toIndex = this[fromNode].indexOf(toNode);
  this[fromNode].splice(toIndex, 1);
  
  var fromIndex = this[toNode].indexOf(fromNode);
  this[toNode].splice(fromIndex, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over each node currently in the graph
  for(var key in this) {
    if (Array.isArray(this[key])) {
      cb(Number(key));
    }
    // call cb on node
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


























