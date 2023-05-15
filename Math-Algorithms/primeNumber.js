//My version 

const isPrime1 = (n) => {
    if (n > 2 && n % 2 === 0) {
        return false
    } else if (n > 3 && n % 3 === 0) {
        return false
    } else if (n > 5 && n % 5 === 0) {
        return false
    } else if (n > 7 && n % 7 === 0) {
        return false
    }
    return true
}

//Big-O = O(1)



//code-evolution version

function isPrime2(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }

    return true
}


//Big-O = O(sqrt(n))