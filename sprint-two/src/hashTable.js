

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
  
  if (bucket === undefined) {
    v = [k, v];
  } else {
    if (bucket.indexOf(k) === -1) {
      v = bucket.concat(k, v);
    } else {
      v = [k, v];       
    }
  }
  
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if (bucket === undefined) {
    return bucket;    
  }
  if (bucket.indexOf(k) !== -1) {
    return bucket[bucket.indexOf(k) + 1];
  }
  

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  this._storage.set(index, undefined); 
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


