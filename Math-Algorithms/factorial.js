//My version 

const factorial = (n) => {
    let product = 1
    for (let i = 1; i <= n; i++) {
        product = product * i
    }
    return product
}

// Big-O = O(n)

// code-evolution version

function factorial(n) {
    let result = 1
    for (let i = 2; i < n; i++) {
        result = result * i;
    }
    return result
}

// Big-O = O(n)

