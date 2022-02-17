import Stack from "./Stack";

describe('Stack', ()=> {
    const items = ['First Added Item', 'Last Added Item'];

    it('should have a typeof Stack', () => {
        const testStack = new Stack();
        expect(testStack).toBeInstanceOf(Stack);
    });

    it('should report size === 0 when the Stack is created', () => {
        const testStack = new Stack();
        expect(testStack.size).toEqual(0);
    });

    it('should peek the last added item without removing it', () => {
        const testStack = new Stack();
        items.map(value => testStack.push(value));
        expect(testStack.peek()).toEqual(items[items.length - 1]);
        expect(testStack.size).toEqual(items.length);
    });

    it('should pop of the last item and remove it from the stack', () => {
        const testStack = new Stack();
        const originalSize = items.length;
        const secondLastItem = items[originalSize - 2];

        items.map(value => testStack.push(value));
        expect(testStack.size).toEqual(originalSize);

        const poppedItem = testStack.pop();

        expect(poppedItem).toEqual(items[items.length - 1]);
        expect(testStack.size).toEqual(originalSize - 1);
        expect(testStack.peek()).toEqual(secondLastItem);
    })
});