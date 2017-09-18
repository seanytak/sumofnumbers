/**
 * Solving Experience E26
 * Created by Sean Takafuji on 9/17/17
 */

const array = [1, 2, 3, 4, 5];

function sumFor(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function sumWhile(numbers) {
  let total = 0;
  let i = 0;
  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }
  return total;
}

function sumRecursion(numbers, index = 0) {
  if (numbers.length === index) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (memo, num) { return memo + num; });
}

console.log(sumFor(array));
console.log(sumWhile(array));
console.log(sumRecursion(array));
console.log(sumTheSimpleWay(array));
