const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num == 0) return 0;
    if(num <= 2) return 1;

    let current = 0;
    let prev1 = 1;
    let prev2 = 1;

    for(let i=3; i <= num; i++){
        current = prev1 + prev2;

        prev1 = prev2;
        prev2 = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
