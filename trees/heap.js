
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

        while (currentIndex && this.heap[currentIndex]?.value < this.heap[parentIndex]?.value) {
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

        if (leftIndex < this.heap.length && this.heap[leftIndex]?.value < this.heap[smallestIndex]?.value) {
            smallestIndex = leftIndex;
        }

        if (rightIndex < this.heap.length && this.heap[rightIndex]?.value < this.heap[smallestIndex]?.value) {
            smallestIndex = rightIndex;
        }

        if (smallestIndex !== currentIndex) {
            [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
            this.heapifyDown(smallestIndex);
        }

    }

    insert(node) {
        if (!node.hasOwnProperty('value')) {
            throw new Error('Wrong node value');
        }
        this.heap.push(node);
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

heap.insert({ value: 3});
heap.insert({ value: 2});
heap.insert({ value: 4});
heap.insert({ value: 6});
heap.insert({ value: 5});
heap.insert({ value: 1});

console.log(heap.popMin()); // 1
console.log(heap.popMin()); // 2
console.log(heap.popMin()); // 3
console.log(heap.popMin()); // 4
console.log(heap.popMin()); // 5
console.log(heap.popMin()); // 6

export { MinHeap };
