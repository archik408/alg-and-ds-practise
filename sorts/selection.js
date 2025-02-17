// Проходим все элементы и на каждой итерации ищем минимальное значение
// если нашли меньше, чем текущее, то меняем местами и т.д.
// O(n^2)
function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (min !== i) {
            const tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}


const list = JSON.parse(process.argv[2]);
console.log(selectionSort(list).join(','));

