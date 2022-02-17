class Queue {
    static FIRST_ELEMENT_INDEX = 0;

    collection: Array<any>;

    constructor() {
        this.collection = new Array<any>();
    }

    enqueue(element: any): void {
        this.collection.push(element);
    }

    dequeue(): any {
        return this.collection.shift();
    }

    front(): any {
        return this.collection[Queue.FIRST_ELEMENT_INDEX];
    }

    get size(): number {
        return this.collection.length;
    }

    get isEmpty(): boolean {
        return this.size === 0;
    }

    values(): Array<any> {
        return this.collection;
    }
}

export default Queue;
