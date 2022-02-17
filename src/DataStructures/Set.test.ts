import Set from "./Set";

describe('Set', () => {
    const items: Array<string> = [
        "First Element",
        "Second Element",
        "Third Element"
    ];

    const itemsClone: Array<any> = [...items];

    const otherItems: Array<string> = [
        "Fourth Element",
        "Another Element",
        "Third Element"
    ];

    it('should have a typeof Set', () => {
        const testSet = new Set();
        expect(testSet).toBeInstanceOf(Set);
    });

    it('should report if the set has a particular element', () => {
        const testSet = new Set();
        const element = items[0];
        const otherElement = items[1];
        testSet.add(element);
        expect(testSet.has(element)).toBeTruthy();
        expect(testSet.has(otherElement)).toBeFalsy();
    });

    it('should add a particular element only if it\'s not already there', () => {
       const testSet = new Set();
       const element = items[0];
       expect(testSet.add(element)).toBeTruthy();
       expect(testSet.has(element)).toBeTruthy();
       expect(testSet.add(element)).toBeFalsy();
    });

    it('should remove a particular element if exists in a set', () => {
        const testSet = new Set();
        const element = items[0];
        items.map(value => testSet.add(value));
        expect(testSet.remove(element)).toBeTruthy();
        expect(testSet.has(element)).toBeFalsy();
        expect(testSet.remove(element)).toBeFalsy();
    });

    it('should return the values (as an array) of a particular set', () => {
        const testSet = new Set();
        items.map(element => testSet.add(element));
        expect(testSet.values).toStrictEqual(items);
    });

    it('should return the correct size of the set', () => {
        const testSet = new Set();
        items.map(element => testSet.add(element));
        expect(testSet.size).toEqual(items.length);
    });

    it('should return if two sets are equal', () => {
        const testSet = new Set();
        const equalSet = new Set();
        const otherSet = new Set();

        items.map(element => testSet.add(element));
        itemsClone.map(cloneElement => equalSet.add(cloneElement));
        otherItems.map(otherElement => otherSet.add(otherElement));

        expect(testSet.equals(equalSet)).toBeTruthy();
        expect(testSet.equals(otherSet)).toBeFalsy();
    });

    it('should return a union of two sets without repetitions', () => {
        const sizes = items.length + otherItems.length;
        const unionItems: Array<any> = [...items];
        const testSet = new Set();
        const otherSet = new Set();
        const union = new Set();

        otherItems.map(otherElement => !unionItems.includes(otherElement) && unionItems.push(otherElement));
        items.map(element => testSet.add(element));
        otherItems.map(otherElement => otherSet.add(otherElement));
        unionItems.map(unionElement => union.add(unionElement));

        const testUnion = testSet.union(otherSet);

        expect(testUnion.equals(union)).toBeTruthy();
        expect(testUnion.size).toBeLessThanOrEqual(sizes);
    });

    it('should return an intersection of two sets', () => {
        const intersectionItems: Array<any> = items.filter(element => otherItems.includes(element));
        const intersectionSet: Set = new Set();
        intersectionItems.map(intersectionElement => intersectionSet.add(intersectionElement));

        const testSet = new Set();
        const otherSet = new Set();
        items.map(element => testSet.add(element));
        otherItems.map(otherElement => otherSet.add(otherElement));
        const intersection: Set = testSet.intersection(otherSet);
        expect(intersection.equals(intersectionSet)).toBeTruthy();
    });

    it('should return the difference between two sets', () => {
        const differentItems: Array<any> = [];
        items.forEach(otherElement => {
            if (!otherItems.includes(otherElement)) {
                differentItems.push(otherElement);
            }
        });

        const differentSet: Set = new Set();
        differentItems.map(differentElement => differentSet.add(differentElement));

        const testSet = new Set();
        const otherSet = new Set();

        items.map(element => testSet.add(element));
        otherItems.map(otherElement => otherSet.add(otherElement));

        const difference: Set = testSet.difference(otherSet);

        expect(difference.equals(differentSet)).toBeTruthy();
    });

    it('should return if a set is a subset of another', () => {
        const biggerSet: Set = new Set();
        const smallerSet: Set = new Set();
        items.map(element => biggerSet.add(element));
        smallerSet.add(items[0]);

        expect(smallerSet.isSubset(biggerSet)).toBeTruthy();
        expect(biggerSet.isSubset(smallerSet)).toBeFalsy();
    });

    it('should return true if a set is empty', () => {
        const emptySet = new Set();
        const testSet = new Set();
        testSet.add(items[0]);
        expect(emptySet.isEmpty).toBeTruthy();
        expect(testSet.isEmpty).toBeFalsy();
        testSet.remove(items[0]);
        expect(testSet.isEmpty).toBeTruthy();
    });
});