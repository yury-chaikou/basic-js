const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let cats = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "^^") {
                cats = cats + 1;
            }
        }
    }
    return cats;
};
