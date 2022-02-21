import Queue from "./Queue";

class Node {
    data: number;
    left: Node;
    right: Node;

    constructor(data: number, left?: Node, right?: Node) {
        this.data = data;
        this.left = left || null;
        this.right = right || null;
    }
}

class BinarySearchTree {
    private root: Node;

    constructor() {
        this.root = null;
    }

    add(data: number): void {
        if (this.isEmpty()) {
            this.root = new Node(data);
            return;
        } else {
            const searchLeaf = (node: Node) => {
                if (node.data === data) {
                    return null;
                }

                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchLeaf(node.left);
                    }
                }

                if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchLeaf(node.right);
                    }
                }
            };
            return searchLeaf(this.root);
        }
    }

    findMin(): number {
        let current = this.getRoot();

        while (current.left != null) {
            current = current.left;
        }

        return current.data;
    }

    findMax(): number {
        let current = this.getRoot();

        while (current.right !== null) {
            current = current.right;
        }

        return current.data;
    }

    getRoot(): Node {
        return this.root;
    }

    find(data: number): Node {
        let current = this.getRoot();

        while (current) {
            if (current.data === data) {
                return current;
            }

            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
    }

    isEmpty(): boolean {
        return this.getRoot() === null;
    }

    isPresent(data: number): boolean {
        return this.find(data) !== null;
    }

    remove(data: number): void {
        const removeNode = (node: Node, data: number): Node => {
            if (node === null) {
                return null;
            }

            if (data === node.data) {
                if (BinarySearchTree.hasNoChildren(node)) {
                    return null;
                }

                if (BinarySearchTree.hasNoLeftChild(node)) {
                    return node.right;
                }

                if (BinarySearchTree.hasNoRightChild(node)) {
                    return node.left;
                }

                let tempNode: Node = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, data);
                return node;

            } else {
                if (data < node.data) {
                    node.left = removeNode(node.left, data);
                    return node;
                } else {
                    node.right = removeNode(node.right, data);
                    return node;
                }
            }
        };

        this.root = removeNode(this.root, data);
    }

    findMinHeight(node: Node = this.root): number {
        if (node === null) {
            return -1;
        }

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node: Node = this.root): number {
        if (node === null) {
            return -1;
        }

        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    inOrder(): number[] {
        if (this.root === null) {
            return null;
        } else {
            const result: number[] = [];

            const transverseInOrder = (node: Node): void => {
                node.left && transverseInOrder(node.left);
                result.push(node.data);
                node.right && transverseInOrder(node.right);
            };

            transverseInOrder(this.root);
            return result;
        }
    }

    inPreOrder(): number[] {
        if (this.root === null) {
            return null;
        } else {
            const result: number[] = [];

            const transverseInPreOrder = (node: Node): void => {
                result.push(node.data);
                node.left && transverseInPreOrder(node.left);
                node.right && transverseInPreOrder(node.right);
            };

            transverseInPreOrder(this.root);
            return result;
        }
    }

    inPostOrder(): number[] {
        if (this.root === null) {
            return null;
        } else {
            const result: number[] = [];

            const transverseInPostOrder = (node: Node): void => {
                node.left && transverseInPostOrder(node.left);
                node.right && transverseInPostOrder(node.right);
                result.push(node.data);
            };

            transverseInPostOrder(this.root);
            return result;
        }
    }

    /* Breadth First Search - BFS */
    inLevelOrder(): number[] {
        const result: number[] = [];
        const queue: Queue = new Queue();

        if (this.root !== null) {
            queue.enqueue(this.root);

            while (!queue.isEmpty) {
                let node = queue.dequeue();
                result.push(node.data);
                if (node.left !== null) {
                    queue.enqueue(node.left);
                }

                if (node.right !== null) {
                    queue.enqueue(node.right);
                }
            }

            return result;
        } else {
            return null;
        }
    }

    isBalanced(): boolean {
        return this.findMinHeight() >= (this.findMaxHeight() - 1);
    }

    private static hasNoChildren(node: Node): boolean {
        return node.left === null && node.right === null;
    }

    private static hasNoLeftChild(node: Node): boolean {
        return !BinarySearchTree.hasNoChildren(node) && node.left === null;
    }

    private static hasNoRightChild(node: Node): boolean {
        return !BinarySearchTree.hasNoChildren(node) && node.right === null;
    }
}

export default BinarySearchTree;
