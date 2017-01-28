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
        this._head.next = new Node(data, null, this._head);
        this._head = this._head.next;
      }
      this.length++;
      return this;
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
      return this;
    }

    isEmpty() {
      return this.length > 0 ? false : true;
    }

    clear() {
      this.length = 0;
      this._head = null;
      this._head.prev = null;
      this._tail = null;
      this._tail.next = null;
    }

    deleteAt(index) {
      if(index === 0){
        this._tail = this._tail.next;
      } else {
        let elem;
        while(index > 0) {
          elem = elem.next;
          index--;
        }
        elem.prev.next = elem.next;
        elem.next.prev = elem.prev;
      }
      this.length--;
      return this;
    }

    reverse() {
      let start = this._head;
      let temp;
      while(start !== null) {
        temp = start.next;
        start.next = start.prev;
        start.prev = temp;
        if(start.prev == null){
          this._head = start;
        }
        start = start.prev;
      }
      return this;
    }

    indexOf(data) {
      let temp = this._tail;
      let index = 0;
      while(temp.next !== null){
        if(temp.data === data){
          return index;
        }
        index++;
      }
      return -1;
    }
}

module.exports = LinkedList;
