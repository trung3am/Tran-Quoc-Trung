// Iterative  
// Time Complexity O(n): using for loop to iterate 1 to n.
// Space Complexity O(1): using one variable to store sum.
// Efficiency:
// Basic approach, simple but inefficient
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Mathematical Formula
// Time Complexity O(1): using formula to calculate result no iteration so constant time performance.
// Space Complexity O(1): no need additional space.
// Efficiency:
// The most efficient to implement, compute result in constant space and instant time.
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

// Recursive call
// Time Complexity O(n): invoke n times recursive calls.
// Space Complexity O(n): space for each recursive called in recursive stack.
// Efficiency:
// least efficient in three way to implement due to recursive calls, with very large n may caused recursive stack limitation over flow.
function sum_to_n_c(n: number): number {
    if (n == 0) return 0;
    return n + sum_to_n_c(n - 1);

}


console.log(sum_to_n_b(Number.MAX_SAFE_INTEGER));
