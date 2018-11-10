

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Generate a hash index based on the key 'val1'
  // Call retrieve on the key to return the array at that index
  // push the value to the returned array
  // pass the new array into set with the hased index and both values
  
  
  this._storage.set(index, v);
};
  
  

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(index);
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  this._storage.set(index, undefined); 
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


