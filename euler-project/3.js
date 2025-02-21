// Largest Prime Factor
// Time complexity: O(sqrt(n)).
// Auxiliary space: O(1)

function largestPrimeFactor(n) {
    let largestPrime = -1;

    while (n % 2 === 0) {
        largestPrime = 2;
        n = n / 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestPrime = i;
            n = n /  i;
        }
    }

    if (n > 2) {
        largestPrime = n;
    }

    return largestPrime;
}

function isPrime(n) {
    if (n <= 1)
        return false;

    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;

    return true;
}

const factor = largestPrimeFactor(600851475143);
console.log(factor, isPrime(factor));
