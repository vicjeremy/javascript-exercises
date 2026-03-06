const palindromes = function (s) {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr == cleanStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
