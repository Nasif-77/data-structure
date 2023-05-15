//My version

//sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

const fibonacci = (n) => {
    const sequence = [0, 1]

    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence[n]
}

//Code-evolution version 

function recursiveFibonacci(n) {
    if (n < 2) return n
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

//recursive Big-O = O(2^n)
//iterative Big-O = O(2^n)

//working
/*
f(6)= f(5)+f(4)
f(5)= f(4)+f(3)
f(4)= f(3)+f(2)
f(3)= f(2)+f(1)
f(2)= f(1)+f(0)
f(1)= if(n<2) therefor 1
f(0)= if(n<2) therefor 0

result 
------
f(0)= 0
f(1)= 1
f(2)= 1+0=1
f(3)= 1+1=2
f(4)= 2+1=3
f(5)= 3+2=5
f(6)= 5+3=8
*/