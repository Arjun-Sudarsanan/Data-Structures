
class LinkedList {
    constructor(value) {
        this.head = {
            val: value,
            next: null
        }
        this.tail = this.head;
        this.count = 1;
    }

    append(newValue) {
        this.tail.next = {
            val: newValue,
            next: null
        };
        this.tail = this.tail.next;
        this.length++;
        return this.head;
    }

    prepend(newValue) {
        const tempReference = this.head;
        this.head = {
            val: newValue,
            next: tempReference
        };
        this.length++;
        return this.head;
    }

    addAtPos(pos, newValue) {
        //Switch statements would be more readable
        if (pos < 0 || pos > this.length) {
            console.warn("Not a valid index");
        }
        else if (pos === 0) {
            this.prepend(newValue);
        }
        else if (pos === this.length) {
            this.append(newValue);
        }
        else {
            const foundValue = this.findElement(pos - 1);
            const newNode = {
                val: newValue,
                next: foundValue.next
            };
            foundValue.next = newNode;
            this.length++;
        }
    }

    findElement(pos) {
        let ele = this.head;
        for (let i = 0; i < pos; i++) {
            ele = ele.next;
        }
        return ele;
    }

    deleteElement(position) {
        if (position === 0) {
            this.head = this.head.next;
        }
        else {
            const leader = this.findElement(position - 1);
            if (position === this.length) {
                leader.next = null;
            }
            else {
                leader.next = leader.next.next;
            }

        }
        this.length--;
    }
}

const newLinkedList = new LinkedList(5);
newLinkedList.append(50);
newLinkedList.append(100);
newLinkedList.prepend(30);
newLinkedList.addAtPos(2, 300);
