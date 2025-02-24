// Largest Palindrome Product

const findPalindromeProduct = (n) => {
    const max = Math.pow(10, n);
    const low = Math.pow(10, n - 1);
    const result = { product: 0, values: [] };

    for (let i= max; i > low; i--){
        for (let j= i; j > low; j--){
            const product = i * j;
            const str = String(product);
            const reverse = str.split('').reverse().join('');
            if (str === reverse && result.product < product) {
                result.product = product;
                result.values = [i, j];
            }
        }
    }
    return result;
}

console.log(findPalindromeProduct(3));
