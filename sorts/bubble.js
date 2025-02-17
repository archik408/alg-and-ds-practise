// Проходим все элементы массива и меняем соседей местами,
// если хоть одна смена за цикл произошла, то запускаем еще одну итерацию по флагу.
// Каждая новая итерация меньше предыдущей на один.
// O(n^2)
function bubbleSort (arr) {
    let swapped = false;
    let count = 0;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1 - count; i++) {
            if (arr[i+1] < arr[i]) {
                const tmp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = tmp;
                swapped = true;
            }
        }
        count++;
    } while (swapped === true)
    return arr;
}


const list = JSON.parse(process.argv[2]);
console.log(bubbleSort(list).join(','));
