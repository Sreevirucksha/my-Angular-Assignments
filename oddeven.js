// Create arrays for storing odd and even numbers
let oddNumbers = [];
let evenNumbers = [];

// Find and store odd and even numbers between 50 and 100
for (let i = 50; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    } else {
        oddNumbers.push(i);
    }
}

// Print both arrays in the console
console.log("Odd Numbers: ", oddNumbers);
console.log("Even Numbers: ", evenNumbers);
