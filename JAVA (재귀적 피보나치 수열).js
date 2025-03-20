// recursiveFibonacci.js

function recursiveFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// 테스트 실행
console.log("Recursive Fibonacci of 6:", recursiveFibonacci(6)); // 8
