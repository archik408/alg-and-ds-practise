function heapSort(arr) {
    let n = arr.length;

    // Построение max-кучи (перегруппируем массив)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Один за другим извлекаем элементы из кучи
    for (let i = n - 1; i > 0; i--) {
        // Перемещаем текущий корень в конец
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Вызываем heapify на уменьшенной куче
        heapify(arr, i, 0);
    }
}

// Функция для преобразования поддерева в max-кучу
function heapify(arr, n, i) {
    let largest = i; // Инициализируем наибольший элемент как корень
    let left = 2 * i + 1; // Левый дочерний элемент
    let right = 2 * i + 2; // Правый дочерний элемент

    // Если левый дочерний элемент больше корня
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Если правый дочерний элемент больше, чем самый большой элемент на данный момент
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // Если самый большой элемент не корень
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Меняем местами

        // Рекурсивно преобразуем затронутое поддерево
        heapify(arr, n, largest);
    }
}

// Пример использования:
let arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);

// class Heap {
//     constructor() {
//         this.heap = []; // Массив для хранения элементов кучи
//     }
//
//     // Добавление элемента в кучу
//     insert(value) {
//         this.heap.push(value); // Добавляем элемент в конец массива
//         this.heapifyUp(); // Восстанавливаем свойства кучи
//     }
//
//     // Извлечение максимального элемента (корня)
//     extractMax() {
//         if (this.heap.length === 0) return null; // Если куча пуста, возвращаем null
//         const max = this.heap[0]; // Запоминаем корневой элемент (максимальный)
//         const last = this.heap.pop(); // Удаляем последний элемент
//         if (this.heap.length > 0) {
//             this.heap[0] = last; // Перемещаем последний элемент в корень
//             this.heapifyDown(); // Восстанавливаем свойства кучи
//         }
//         return max; // Возвращаем максимальный элемент
//     }
//
//     // Восстановление свойств кучи при добавлении элемента
//     heapifyUp() {
//         let index = this.heap.length - 1; // Начинаем с последнего элемента
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2); // Индекс родителя
//             if (this.heap[parentIndex] >= this.heap[index]) break; // Если свойство кучи выполнено, выходим
//             [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]; // Меняем местами
//             index = parentIndex; // Переходим к родителю
//         }
//     }
//
//     // Восстановление свойств кучи при извлечении элемента
//     heapifyDown() {
//         let index = 0; // Начинаем с корня
//         const length = this.heap.length;
//         while (true) {
//             let leftChildIndex = 2 * index + 1; // Индекс левого дочернего элемента
//             let rightChildIndex = 2 * index + 2; // Индекс правого дочернего элемента
//             let largest = index; // Предполагаем, что текущий элемент наибольший
//
//             // Если левый дочерний элемент больше текущего
//             if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
//                 largest = leftChildIndex;
//             }
//
//             // Если правый дочерний элемент больше текущего
//             if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
//                 largest = rightChildIndex;
//             }
//
//             // Если наибольший элемент не текущий, меняем их местами
//             if (largest !== index) {
//                 [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//                 index = largest; // Переходим к новому индексу
//             } else {
//                 break; // Если свойство кучи выполнено, выходим
//             }
//         }
//     }
//
//     // Визуализация кучи в виде дерева
//     printHeap() {
//         console.log("Heap as tree:");
//         this._printHeap(0, 0);
//     }
//
//     // Рекурсивная функция для визуализации дерева
//     _printHeap(index, level) {
//         if (index >= this.heap.length) return;
//         this._printHeap(2 * index + 2, level + 1); // Рекурсивно обрабатываем правого потомка
//         console.log(" ".repeat(level * 4) + this.heap[index]); // Выводим текущий элемент
//         this._printHeap(2 * index + 1, level + 1); // Рекурсивно обрабатываем левого потомка
//     }
// }
//
// // Функция пирамидальной сортировки
// function heapSort(arr) {
//     const heap = new Heap(); // Создаем кучу
//
//     // Добавляем все элементы массива в кучу
//     for (let value of arr) {
//         heap.insert(value);
//     }
//
//     heap.printHeap();
//     // Извлекаем элементы из кучи в отсортированном порядке
//     const sortedArray = [];
//     while (heap.heap.length > 0) {
//         sortedArray.unshift(heap.extractMax()); // Добавляем максимальный элемент в начало массива
//     }
//
//     return sortedArray;
// }
//
// // Пример использования
// const arr = [12, 11, 13, 5, 6, 7];
// console.log("Исходный массив:", arr);
//
// const sortedArr = heapSort(arr);
// console.log("Отсортированный массив:", sortedArr);
