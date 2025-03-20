// memoizationFibonacci.js

// 메모이제이션을 위한 배열
let memo = [];

// 메모이제이션을 사용한 피보나치 계산
function memoizationFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    memo[n] = memoizationFibonacci(n - 1) + memoizationFibonacci(n - 2);
    return memo[n];
}

// 테스트 실행
console.log("Memoization Fibonacci of 6:", memoizationFibonacci(6)); // 8
