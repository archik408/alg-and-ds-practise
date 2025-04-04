function sumSquareDifference(n) {
    // Calculate sum of first n numbers
    const sum = n * (n + 1) / 2;
    
    // Calculate sum of squares of first n numbers
    const sumOfSquares = n * (n + 1) * (2 * n + 1) / 6;
    
    // Calculate the difference
    const squareOfSum = sum * sum;
    const difference = squareOfSum - sumOfSquares;
    
    return difference;
}

const result = sumSquareDifference(100);
console.log(result);