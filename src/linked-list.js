const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      if(this.length === 0){
        this._head = this._tail = new Node(data);
      } else {
        this._head.next = new Node(data,this._head);
        this._head = this._head.next;
      }
      this.length++;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      let temp = this._tail;
      while(index > 0) {
        temp = temp.next;
        index--;
      }
      return temp.data;
    }

    insertAt(index, data) {
      if(index === 0){
        this._tail = new Node(data, null, this._tail);
      } else {
        let parent = this._tail;
        while(index > 0) {
          parent = parent.next;
          index--;
        }
        parent = parent.prev;
        let elem = new Node(data, parent, parent.next);
        parent.next.prev = elem;
        parent.next = elem;
      }
      this.length++;
    }

    isEmpty() {
      return this.length > 0 ? false : true;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
