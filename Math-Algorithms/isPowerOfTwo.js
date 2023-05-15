//My version

const powerOfTwo = (n) => {
    let isPower = 2
    if (n === 1) return true
    for (let i = 1; i <= n / 2; i++) {
        if (isPower === n) return true
        isPower = isPower * 2
    }
    return false
}

//Big-O = O(log n)

//code-evolution version 

function isPowerOfTwo(n) {
    if (n < 1) return false
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

// Big-O = O()

function isPowerOfTwoBitwise(n) {
    if (n < 1) return false
    return (n & (n - 1)) === 0
}

// Big-O = O(1)