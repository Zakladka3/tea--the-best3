// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to find the maximum number in an array
  function findMax(numbers) {
    if (numbers.length === 0) {
      return null;
    }
    
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    
    return max;
  }
  
  // Example usage of helper functions
  console.log(isEven(5)); // Output: false
  console.log(isOdd(5)); // Output: true
  console.log(findMax([3, 8, 1, 6, 2])); // Output: 8
  