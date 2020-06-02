class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(el) {
    this.items[this.count] = el;
    console.log(`${el} at ${this.count}`);
    this.count++;

    return this.count;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
