// Делим массив на 2 части пополам,
// рекурсивно применяем деление пополам и слияние для обеих частей
// сливаем 2 части: поочередно сравниваем элементы из обеих частей
// и меньший результат добавляем в новый результирующий массив
// докидываем хвост оставшейся части, если части не были равны

// O(n*log(n))
function mergeSort (arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0 , mid);
    const right = arr.slice(mid , arr.length);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left , right) {
    const result =  [];
    let i = 0
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}


const list = JSON.parse(process.argv[2]);
console.log(mergeSort(list).join(','));

