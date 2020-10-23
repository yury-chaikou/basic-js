const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
    throw new CustomError('Not implemented');
    function getSeason(date){
        if (date === '' || date === undefined) {
            return 'Unable to determine the time of year!';
        }
        if (typeof date !== 'object' || date === null || !date.getTime() || !(date instanceof Date)) {
            throw new Error("Error")
        }
        if (date.toString().includes('Jan') || date.toString().includes('Feb') || date.toString().includes('Dec')) return 'winter';
        if (date.toString().includes('Mar') || date.toString().includes('Apr') || date.toString().includes('May')) return 'spring';
        if (date.toString().includes('Jun') || date.toString().includes('Jul') || date.toString().includes('Aug')) return 'summer';
        if (date.toString().includes('Sep') || date.toString().includes('Nov') || date.toString().includes('Oct')) return 'autumn';
    };
};
