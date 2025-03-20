// iterativeFibonacci.js

function iterativeFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// 테스트 실행
console.log("Iterative Fibonacci of 6:", iterativeFibonacci(6)); // 8
