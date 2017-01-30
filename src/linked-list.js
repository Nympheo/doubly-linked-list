const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if(!this._head){
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev  = this._tail;
            this._tail = node;
        }
         this.length++;
         return this;
    }

    head() {
        if(!this._head) {
          return null;
        }
        return this._head.data;
    }

    tail() {
        if(!this._tail) {
          return null;
        }
        return this._tail.data;
    }

    at(index) {
        if(index > this.length || index < 0) return false;
        let current = this.findIndex(index);
        return current.data;
    }

    insertAt(index, data) {
        if(index > this.length || index < 0) {
          throw new Error("bad request");
        }
        let node = new Node(data);
        let current = this.findIndex(index);
        if(!current) {
            this.append(data);
            return this;
        }
        else if(current === this._head) {
            node.next = current;
            current.prev = node;
            this._head = node;
        }
        else {
        node.prev = current.prev;
        node.next = current;
        current.prev.next = node;;
        current.prev = node;
        }
        this.length++;
        return this;
    }

    isEmpty() {
      return this.length > 0 ? false : true;
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
        return this;
    }

    deleteAt(index) {
        if(index > this.length || index < 0) {
          throw new Error("bad index");
        }
        let current = this.findIndex(index);
        if(current === this._head) {
            if(current.next) {
              current.next.prev = null;
            }
            else {
              this._tail = null;
            }
            this._head = current.next;
        }
        else if(current === this._tail) {
            current.prev.next = null;
            this._tail = current.prev;
        }
        else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.length --;
        return this;
    }

    reverse() {
        let current = this._tail;
        while(current) {
            let temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = temp;
        }
        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let i = 0;
        while(current) {
            if(current.data === data) {
              return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }

    findIndex(index) {
         let a = 0;
         let current = this._head;
         while(index!==a) {
            current = current.next;
            a++;
        }
        return current;
    }
}

module.exports = LinkedList;
