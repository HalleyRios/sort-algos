import Queue from "./Queue";

describe('Queue', () => {
    const FIRST_ITEM_INDEX = 0;
    const items: number[] = [1, 2, 3, 4, 5];

    it('should be an instance of Queue', () => {
        const testQueue = new Queue();

        expect(testQueue).toBeInstanceOf(Queue);
    });

    it('should enqueue elements in correct order', () => {
        const testQueue = new Queue();
        items.map(element => testQueue.enqueue(element));

        expect(testQueue.values()[FIRST_ITEM_INDEX]).toEqual(items[FIRST_ITEM_INDEX]);
    });

    it('should dequeue elements in correct order', () => {
        const testQueue = new Queue();
        items.map(element => testQueue.enqueue(element));
        const dequeuedElement = testQueue.dequeue();
        expect(dequeuedElement).toEqual(items[FIRST_ITEM_INDEX]);
        expect(testQueue.size).toEqual(items.length - 1);
    });

    it('should return the first element in a queue', () => {
        const testQueue = new Queue();
        items.map(element => testQueue.enqueue(element));
        expect(testQueue.front()).toEqual(items[FIRST_ITEM_INDEX]);
    });

    it('should correctly report if queue is empty', () => {
        const emptyQueue = new Queue();
        const filledQueue = new Queue();
        items.map(element => filledQueue.enqueue(element));
        expect(emptyQueue.isEmpty).toBeTruthy();
        expect(filledQueue.isEmpty).toBeFalsy();
    });
});
