const palindromes = function (str) {
    str = str
        .toLowerCase()
        .split("")
        .filter(value => (value >= "a" && value <= "z") || (value >= "0" && value <= "9"))
        .join("");

    const reversedString = str.split('').reverse().join('');

    return str === reversedString;
};

// Do not edit below this line
module.exports = palindromes;