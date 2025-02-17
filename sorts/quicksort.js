// Выбираем опорный элемент и делим массив на 2 части,
// первая часть - это элементы меньше опорного, вторая - больше опорного
// повторяем рекурсивно для обеих частей
// объединяем результаты

// лучший случай O(n*log(n))
// O(n^2)
function quickSort (arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Не создаем массивы для правой и левой части, пробегаем эти куски и сортируем элементы прямо в текущем
function quickSortWithoutExtraMemory(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivot = partition(arr, left, right);
        quickSortWithoutExtraMemory(arr, left, pivot - 1);
        quickSortWithoutExtraMemory(arr, pivot + 1, right);
    }

    return arr;
}

function partition (arr, left, right) {
    const pivot = arr[arr.length - 1];
    let i = left - 1;

    for (let j = left; j < right; i++) {
        if (arr[i] < pivot) {
            i++;
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}


const list = JSON.parse(process.argv[2]);
console.log(quickSort(list).join(','));

