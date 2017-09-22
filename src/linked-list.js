const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
            if (this.length != 0) {
                this._tail.next = node;
                node.previous = this._tail;
                this._tail = node;
            } else {
                this._head = node;
                this._tail = node;
            }
            this.length++;        
            return this;
    }

    head() {
        if (this._head == null){
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (this._tail == null){
            return null;
        } else {
            return this._tail.data;
        } 
    }

    at(index) {
     var atNode = this._head, count = 0;
        while (count < index) {
            atNode = atNode.next;
            count++;
        }
        return atNode.data;
    }

    insertAt(index, data) {
        var insertAtNode = this._head, count = 0;
        while (count < index) {
            insertAtNode = insertAtNode.next;
            count++;
        }
        insertAtNode.data = data;
        return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        var deleteAtNode = this._head;
        for (var i = 0; i < this.length; i++){
            if (i == index){
                if (deleteAtNode.prev != null){
                    deleteAtNode.prev.next = deleteAtNode.next;
                    deleteAtNode.prev = deleteAtNode.prev.next;
                    deleteAtNode = null;
                    this.length--;
                }    
            } else {
                deleteAtNode = deleteAtNode.next;
            }
        }
        return this;
    }

    reverse() {
        var rememberAboutData = [];
        var reverseNode = this._head;
        for (var i = 0; i <this.length; i++){
            rememberAboutData[i] = reverseNode.data;
            reverseNode = reverseNode.next;
        }
        rememberAboutData.reverse();
        this.clear();
        for (var i = 0; i < rememberAboutData.length; i++){
            this.append(rememberAboutData[i]);
        }
        return this;
    }

    indexOf(data) {
        var indexOfNode = this._head;
        for (var i = 0; i < this.length; i++){
            if (indexOfNode.data == data){
                return i;
            } else {
                indexOfNode = indexOfNode.next;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;

