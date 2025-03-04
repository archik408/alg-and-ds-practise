// Euqlid algorithm: greatest common divider
// O(logN)
function gcd(a, b) {
    while (b !== 0) {
        const tmp = b;
        b = a % b;
        a = tmp;
    }
    return a;
}

// LCD: Lowest common multiple
function lcm(a, b) {
    return (a * b) / gcd(a, b); 
}

// Smallest Multiple
// O(NlogN)
function smallestMultiple(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = lcm(result, i);
    }

    return result;
}

console.log(smallestMultiple(10));
console.log(smallestMultiple(20));