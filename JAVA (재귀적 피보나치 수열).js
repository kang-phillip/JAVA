// recursiveFibonacci.js

// 재귀적 피보나치 함수
function fibRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// 테스트 실행
const n = 6;
console.log("Recursive Fibonacci of " + n + ": " + fibRecursive(n));  // 8
