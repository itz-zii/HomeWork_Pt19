function hasNegative(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return true;
    }
  }
  return false;
}

function isAllEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

function findDivisibleBy5(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
      return numbers[i];
    }
  }
  return undefined;
}

function findLastNegative(numbers) {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] < 0) {
      return numbers[i];
    }
  }
  return undefined;
}

function findFirstOddIndex(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return i;
    }
  }
  return -1;
}

function findLastGreaterThan50(numbers) {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > 50) {
      return i;
    }
  }
  return -1;
}

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function multiplyAll(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}

function longestStringLength(strings) {
  let maxLength = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxLength) {
      maxLength = strings[i].length;
    }
  }
  return maxLength;
}

function hasPrime(numbers) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) return true;
  }
  return false;
}

let nums = [3, 10, -5, 60, 7];
let strs = ["hello", "world", "JavaScript"];

console.log("hasNegative:", hasNegative(nums));
console.log("isAllEven:", isAllEven(nums));
console.log("findDivisibleBy5:", findDivisibleBy5(nums));
console.log("findLastNegative:", findLastNegative(nums));
console.log("findFirstOddIndex:", findFirstOddIndex(nums));
console.log("findLastGreaterThan50:", findLastGreaterThan50(nums));
console.log("sum:", sum(nums));
console.log("multiplyAll:", multiplyAll(nums));
console.log("longestStringLength:", longestStringLength(strs));
console.log("hasPrime:", hasPrime(nums));
