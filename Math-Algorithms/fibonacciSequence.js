//My version
const fibonacciSequence = (n) => {
    let sequence = []
    let i = 0
    for (let i; i < n; i++) {

        if (sequence.length >= 2) {
            sequence.push(sequence[i - 2] + sequence[i - 1])
        }
        if (i === 0 || i === 1) sequence.push(i)
    }

    return sequence
}

//Big-O = O(n) 




//Code-evolution version

function fibonacci(n) {
    let fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib
}

//Big-O = O(n) 



const sequence = fibonacci(7)
console.log(sequence)