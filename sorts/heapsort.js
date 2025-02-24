//
// O(nlog(n))
function heapSort (arr) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }

    for (let i = n - 1; i > 0; i--) {
        const temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;

        heapify(arr, 0, i);
    }

    return arr;
}

function heapify(arr, root, n) {
    let maxIndex = root;
    const leftNode = 2 * root + 1;
    const rightNode = 2 * root + 2;

    if (leftNode < n && arr[maxIndex] < arr[leftNode]) {
        maxIndex = leftNode;
    }

    if (rightNode < n && arr[maxIndex] < arr[rightNode]) {
        maxIndex = rightNode;
    }

    if (root !== maxIndex) {
        const temp = arr[root];
        arr[root] = arr[maxIndex];
        arr[maxIndex] = temp;

        // (!!!) Recursively heapify the affected subtree
        heapify(arr, maxIndex, n);
    }
}


const list = JSON.parse(process.argv[2]);
heapSort(list);
console.log(list.join(','));

