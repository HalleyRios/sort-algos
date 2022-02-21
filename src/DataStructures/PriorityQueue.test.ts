import PriorityQueue from './PriorityQueue';

describe('PriorityQueue', () => {
    const items: Array<any> = [
        ['Foo', 1],
        ['Bar', 3],
        ['Baz', 2],
    ];

    const queuedItems: Array<any> = [
        ['Foo', 1],
        ['Baz', 2],
        ['Bar', 3],
    ];

    it('should be an instance of PriorityQueue', () => {
        const testPriorityQueue = new PriorityQueue();
        expect(testPriorityQueue).toBeInstanceOf(PriorityQueue);
    });

    it('should enqueue respecting the priorities', () => {
        const testPriorityQueue = new PriorityQueue();
        items.map(element => testPriorityQueue.enqueue(element));
        expect(testPriorityQueue.values()).toStrictEqual(queuedItems);
    });
});
