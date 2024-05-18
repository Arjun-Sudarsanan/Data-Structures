class NewArray {

    constructor() {
        this.data = {};
        this.length = 0;
    }

    getItemAt(index) {
        return this.data[index];
    }

    getArrayItems() {
        return this.data;
    }

    pushItem(item) {
        this.data[this.length] = item;
        this.length++;
    }

    popItem() {
        const deletedItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }

    deleteItemAt(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return this.data[this.length];
    }
}

const myNewArray = new NewArray();
myNewArray.pushItem('Hi');
myNewArray.pushItem('My');
myNewArray.pushItem('Name');
myNewArray.pushItem('Is');
myNewArray.pushItem('Arjun');
console.log('Array after insertion...', myNewArray.getArrayItems());

console.log('Element at position...', myNewArray.getItemAt(2));

myNewArray.popItem();
console.log('Array after popping...', myNewArray.getArrayItems());

myNewArray.deleteItemAt(2);
console.log('Array after deletion...', myNewArray.getArrayItems());
