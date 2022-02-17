import Queue from "./Queue";

class PriorityQueue extends Queue {
    static PRIORITY_INDEX = 1;

    enqueue(newElement: any) {
        if (this.isEmpty) {
            super.enqueue(newElement);
            return;
        } else {
            let added = false;

            for (let i = 0; i < this.collection.length; i++) {
                if (newElement[PriorityQueue.PRIORITY_INDEX] < this.collection[i][PriorityQueue.PRIORITY_INDEX]) {
                    this.collection.splice(i, 0, newElement);
                    added = true;
                    break;
                }
            }

            if (!added) {
                super.enqueue(newElement);
            }
        }
    }

    values(): Array<any> {
        return super.values();
    }
}

export default PriorityQueue;
