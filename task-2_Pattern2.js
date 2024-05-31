function fibonacciSeries(limit) {
    let fibonacci = [0, 1];
    let i = 2;
    while (fibonacci[i - 1] + fibonacci[i - 2] < limit) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }
    return fibonacci.join(', ');
}

const inputNumber = 10;
const result = fibonacciSeries(inputNumber);
console.log("Fibonacci series up to", inputNumber, ":", result);
