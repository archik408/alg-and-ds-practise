// Even Fibonacci Numbers

let sum = 0;
let fib = 1;
let fibNext = 2;

while (fibNext < 4000000) {
    if (fibNext % 2 === 0) {
        sum = sum + fibNext;
    }

    const temp = fibNext;
    fibNext = fib + fibNext;
    fib = temp;
}

console.log(sum);

console.log(sum);
