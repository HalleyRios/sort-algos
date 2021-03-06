import Queue from './Queue';

class PriorityQueue extends Queue {
    static PRIORITY_INDEX = 1;

    enqueue(newElement: any) {
        let added = false;
        if (!this.isEmpty) {
            for (let i = 0; i < this.collection.length; i++) {
                if (newElement[PriorityQueue.PRIORITY_INDEX] < this.collection[i][PriorityQueue.PRIORITY_INDEX]) {
                    this.collection.splice(i, 0, newElement);
                    added = true;
                    break;
                }
            }
        }
        
        if (!added) {
            super.enqueue(newElement);
        }
    }
}

export default PriorityQueue;
