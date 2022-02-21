class Stack {
    store: object;
    count: number;

    constructor() {
        this.store = {};
        this.count = 0;
    }

    get size(): number {
        return this.count;
    }

    push(item: any): void {
        this.store[this.count] = item;
        this.count++;
    }

    peek(): any {
        return this.isEmpty() ? undefined : this.store[this.count - 1];
    }

    pop(): any {
        if (this.isEmpty()) return undefined;
        const poppedItem = this.store[this.count - 1];
        delete this.store[this.count - 1];
        this.count--;
        return poppedItem;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }
}

export default Stack;