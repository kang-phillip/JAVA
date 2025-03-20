// performanceTest.js

// 재귀적 피보나치 함수
function fibRecursive(n) {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// 메모이제이션 피보나치 함수
let memo = [];
function fibMemoization(n) {
    if (n <= 1) return n;
    if (memo[n] !== undefined) return memo[n];
    memo[n] = fibMemoization(n - 1) + fibMemoization(n - 2);
    return memo[n];
}

// 반복문을 사용한 피보나치 함수
function fibIterative(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// 성능 테스트 실행
const n = 40;
let start, end;

// 재귀적 피보나치 성능 테스트
start = performance.now();
console.log("Recursive Fibonacci of " + n + ": " + fibRecursive(n));
end = performance.now();
console.log("Recursive Time: " + (end - start) + " ms");

// 메모이제이션 피보나치 성능 테스트
start = performance.now();
console.log("Memoization Fibonacci of " + n + ": " + fibMemoization(n));
end = performance.now();
console.log("Memoization Time: " + (end - start) + " ms");

// 반복문 방식 성능 테스트
start = performance.now();
console.log("Iterative Fibonacci of " + n + ": " + fibIterative(n));
end = performance.now();
console.log("Iterative Time: " + (end - start) + " ms");
