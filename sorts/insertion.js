// Проходим все элементы и на каждой итерации
// сравниваем текущий элемент с предыдущими и так до самого начала,
// если текущий меньше предыдущего в паре, то меняем их местами.
// O(n^2)
// хороша для маленького набора данных, по Седжвику до 15 лучше чем merge/quick
// в Node.js используется для малого набора, для большого используется quick
function insertionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j-1] > arr[j]) {
            const tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
            j = j - 1;
        }
    }
    return arr;
}


const list = JSON.parse(process.argv[2]);
console.log(insertionSort(list).join(','));

