//My version
/*
factorial(6) = 6*5*4*3*2*1 = 720
factorial(5) = 5*4*3*2*1 = 120
factorial(4) = 4*3*2*1 = 24
factorial(3) = 3*2*1 = 6
factorial(2) = 2*1 = 2
factorial(1) = 1 = 1
factorial(0) = 1 = 1
 */

// const factorial = (n) => {
//     if (n < 2) return 1
//     let factorialNumb = n
//     for (let i = n - 1; i > 0; i--) {
//         factorialNumb *= i
//     }
//     return factorialNumb
// }

//Code-evolution version

function factorial(n) {
    if (n === 0) return 1
    return n * factorial(n - 1)
}

//Big-O = O(n)


/*
WORKING
-------

factorial(5)={
 5 x factorial of (4) 
}
factorial(4)={
 4 x factorial of (3) 
}
factorial(3)={
 3 x factorial of (2) 
}
factorial(2)={
 2 x factorial of (1) 
}
factorial(1)={
 1 x factorial of (0) 
}
factorial(0)=1

RESULT
------

factorial(0)=1
factorial(1)={
    1 x 1 =1 
}
factorial(2)={
    2 x 1 =2 
}
factorial(3)={
    3 x 2 =6
}
factorial(4)={
    4 x 6 =24 
}
factorial(5)={
    5 x 24 =120 
}

*/
