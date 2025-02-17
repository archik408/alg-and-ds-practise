// Это улучшенная сортировка вставками
// Идея в том, чтобы сортировать вставками в определенных промежутках, которые формирует
// основной массив
function shellSort (arr) {
    for (let gap = Math.floor(arr.length/2); gap > 0; gap = Math.floor(gap/2)) {
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            while (j >= gap && arr[j-gap] > arr[j]) {
                const tmp = arr[j];
                arr[j] = arr[j - gap];
                arr[j - gap] = tmp;
                j = j - gap;
            }
        }
    }

    return arr;
}


const list = JSON.parse(process.argv[2]);
console.log(shellSort(list).join(','));

