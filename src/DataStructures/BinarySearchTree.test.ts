import BinarySearchTree from "./BinarySearchTree";

describe('BinarySearchTree', () => {
    const items: number[] = [3, 5, 7, 2, 4, 6, 8, 1];

    it('should be an instance of BinarySearchTree', () => {
        const bst = new BinarySearchTree();
        expect(bst).toBeInstanceOf(BinarySearchTree);
    });

    it('should properly add nodes to the tree', () => {
        const bst = new BinarySearchTree();
        items.map(item => bst.add(item));

        const bstRoot = bst.getRoot();
        expect(bstRoot.data).toEqual(items[0]);
        expect(bstRoot.left.data).toEqual(items[3]);
    });

    it('should return the smaller value on a tree', () => {
        const bst: BinarySearchTree = new BinarySearchTree()
        items.map(item => bst.add(item));

        expect(bst.findMin()).toEqual(1);
    });

    it('should return the bigger value on a tree', () => {
        const bst: BinarySearchTree = new BinarySearchTree()
        items.map(item => bst.add(item));

        expect(bst.findMax()).toEqual(8);
    });

    it('should find a node on a tree', () => {
        const bst: BinarySearchTree = new BinarySearchTree();
        items.map(item => bst.add(item));

        const foundItem = bst.find(items[0]);
        const notFoundItem = bst.find(-1);

        expect(foundItem.data).toEqual(items[0]);
        expect(notFoundItem).toBeNull();
    });

    it('should return true if a node is present on a tree', () => {
        const bst: BinarySearchTree = new BinarySearchTree();
        items.map(item => bst.add(item));

        expect(bst.isPresent(items[0])).toBeTruthy();
        expect(bst.isPresent(-1)).toBeFalsy();
    });

    it('should properly remove a node from the tree', () => {
        const bstOneChildRemoval: BinarySearchTree = new BinarySearchTree();
        const bstTwoChildRemoval: BinarySearchTree = new BinarySearchTree();
        const bstNoChildRemoval: BinarySearchTree = new BinarySearchTree();

        items.map(item => {
            bstOneChildRemoval.add(item);
            bstTwoChildRemoval.add(item);
            bstNoChildRemoval.add(item);
        });

        const nodeWithOneChild: number = items[3];
        const nodeWithTwoChildren: number = items[0];
        const nodeWithNoChild: number = items[items.length - 1];

        bstOneChildRemoval.remove(nodeWithOneChild);
        expect(bstOneChildRemoval.isPresent(nodeWithOneChild)).toBeFalsy();

        bstTwoChildRemoval.remove(nodeWithTwoChildren);
        expect(bstTwoChildRemoval.isPresent(nodeWithTwoChildren)).toBeFalsy();

        bstNoChildRemoval.remove(nodeWithNoChild);
        expect(bstNoChildRemoval.isPresent(nodeWithNoChild)).toBeFalsy();
    });

    it('should return the min height of a tree, -1 for empty', () => {
        const bst: BinarySearchTree = new BinarySearchTree();

        expect(bst.findMinHeight()).toEqual(-1);

        items.map(item => bst.add(item));
        expect(bst.findMinHeight()).toEqual(1);
    });

    it('should return the max height of a tree, -1 for empty', () => {
        const bst: BinarySearchTree = new BinarySearchTree();

        expect(bst.findMaxHeight()).toEqual(-1);

        items.map(item => bst.add(item));
        expect(bst.findMaxHeight()).toEqual(3);
    });

    it('should return if the tree is balanced', () => {
        const unbalancedTree: BinarySearchTree = new BinarySearchTree();
        items.map(item => unbalancedTree.add(item));

        expect(unbalancedTree.isBalanced()).toBeFalsy();
    });

    it('should return an array with numbers sorted, null if empty', () => {
        const bst: BinarySearchTree = new BinarySearchTree();

        expect(bst.inOrder()).toBeNull();

        items.map(item => bst.add(item));
        items.sort((a, b) => a - b);

        expect(bst.inOrder()).toEqual(items);
    });
});
