const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, val) => {
    return total += val;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, val) => {
    return total *= val;
  }, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  let total = 1;

  if(num <= 1) return 1;

  for (let i = 2; i <= num; i++) 
      total = total * i; 

  return total; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
