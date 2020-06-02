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
  pop() {
    if (this.items.length === 0) return undefined;
    const pop = this.items[this.count - 1];
    this.count--;

    if (this.count === -1) {
      this.items = [];
    }
    let newitems = [];
    for (let i = 0; i <= this.count; i++) {
      newitems[i] = this.items[i];
      this.items = newitems;
    }

    return pop;
  }
  peek() {
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.items.length === 0 ? true : false;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());
