const { isNumber } = require("util");

/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
/*    if (!Number.isInteger(hours) || !Number.isInteger(minutes) ) {
        return false;
    }*/

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return false;
    }

    return true;
 };