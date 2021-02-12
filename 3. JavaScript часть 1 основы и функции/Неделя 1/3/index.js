/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59){
        return false;
    }

    minutes = minutes + interval;
    if (minutes > 59) {
        hours = hours + Math.floor(minutes / 60);
        minutes = minutes - Math.floor(minutes / 60) * 60;
    }

    if (hours > 23) {
        hours = hours - Math.floor(hours / 24) * 24;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
};
