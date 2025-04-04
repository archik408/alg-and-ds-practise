
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Так как дерево строится на основании массива по тройкам:
    // т.е. первая тройка это 0,1,2 где для 1 и 2 родитель это 0
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    // просеивание кучи вверх (при добавлении)
    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.getParentIndex(currentIndex);

        while (currentIndex && this.heap[currentIndex] < this.heap[parentIndex]) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    // просеивание кучи вниз (при удалении корня)
    heapifyDown(index = 0) {
        let currentIndex = index;
        let leftIndex = this.getLeftChildIndex(currentIndex);
        let rightIndex = this.getRightChildIndex(currentIndex);

        // Находим минимальный в тройке
        let smallestIndex = currentIndex;

        if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftIndex;
        }

        if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightIndex;
        }

        if (smallestIndex !== currentIndex) {
            [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
            this.heapifyDown(smallestIndex);
        }

    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    popMin() {
        if (!this.heap.length) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return min;
    }

    min() {
        return this.heap.length ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return !this.heap.length;
    }
}

const heap = new MinHeap();

heap.insert(3);
heap.insert(1);
heap.insert(6);
heap.insert(5);
heap.insert(2);
heap.insert(4);

console.log(heap.popMin()); // 1
console.log(heap.popMin()); // 2
console.log(heap.popMin()); // 3
console.log(heap.popMin()); // 4
console.log(heap.popMin()); // 5
console.log(heap.popMin()); // 6
