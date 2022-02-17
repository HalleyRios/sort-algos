class Set {
    collection: Array<any>;

    constructor() {
        this.collection = new Array<any>();
    }

    has(element: any): boolean {
        return this.values.indexOf(element) !== -1;
    }

    add(element: any): boolean {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }

        return false;
    }

    remove(element: any): boolean {
        if (this.has(element)) {
            const index = this.values.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }

        return false;
    }

    union(otherSet: Set): Set {
        const union: Set = new Set();
        this.values.map(element => union.add(element));
        otherSet.values.map(otherElement => union.add(otherElement));

        return union;
    }

    intersection(otherSet: Set): Set {
        const intersection: Set = new Set();
        this.values.forEach(element => {
            if (otherSet.has(element)) {
                intersection.add(element);
            }
        });

        return intersection;
    }

    difference(otherSet: Set): Set {
        const difference = new Set();
        this.values.forEach(element => {
            if (!otherSet.has(element)) {
                difference.add(element);
            }
        });

        return difference;
    }

    equals(otherSet: Set): boolean {
        if (this.size !== otherSet.size) return false;
        const diffs: Array<any> = this.values.filter(element => !otherSet.has(element));

        return diffs.length === 0;
    }

    isSubset(otherSet: Set): boolean {
       return this.values.every(element => {
           return otherSet.has(element);
       });
    }

    get isEmpty(): boolean {
        return this.size === 0;
    }

    get values(): Array<any> {
        return this.collection;
    }

    get size(): number {
        return this.values.length;
    }
}

export default Set;