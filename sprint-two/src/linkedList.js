var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var tempValue = this.head.value;
    this.head = this.head.next;
    return tempValue;
  };

  list.contains = function(target) {
    var currNode = this.head;
    while (currNode.next !== null) {
      if (currNode.value === target) {
        return true;
      } else {
        currNode = currNode.next;
      }
    }

    if (currNode.value === target) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*hello
 * Complexity: What is the time complexity of the above functions?
 */

// instantiate
// var linkedList = LinkedList();

// linkedList.addToTail(4); 