// memoizationFibonacci.js

// 메모이제이션을 위한 배열
let memo = [];

// 메모이제이션을 사용한 피보나치 함수
function fibMemoization(n) {
    if (n <= 1) {
        return n;
    }
    if (memo[n] !== undefined) {  // 이미 계산된 값이 있으면 바로 반환
        return memo[n];
    }
    memo[n] = fibMemoization(n - 1) + fibMemoization(n - 2);  // 계산된 값을 저장
    return memo[n];
}

// 테스트 실행
const n = 6;
console.log("Memoization Fibonacci of " + n + ": " + fibMemoization(n));  // 8
