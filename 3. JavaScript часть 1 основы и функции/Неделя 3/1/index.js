/**
 * @param {String} date
 * @returns {Object}
 */
    var v = {
        value: '2017-05-16 13:45',
        add: function (amount, param) {
            if (amount < 0) {
            throw new TypeError('Это не число!!!');
            }
                    this.value = changeDate(this.value, amount, param);
            return this;
        },
        subtract: function (amount, param) {
            if (amount < 0) {
                throw new TypeError('Это не число!!!');
            }
            this.value = changeDate(this.value, -amount, param);
            return this;
        }
    }

function changeDate(dt, am, pr) {
    var d = new Date(dt);
    switch (pr) {
        case 'years':
            d.setFullYear(d.getFullYear() + am);
            break;
        case 'months':
            d.setMonth(d.getMonth() + am);
            break;
        case 'days':
            d.setDate(d.getDate() + am);
            break;
        case 'hours':
            d.setHours(d.getHours() + am);
            break;
        case 'minutes':
            d.setMinutes(d.getMinutes() + am);
            break;
        default:
            throw new TypeError('Это не правильно!!!');
            break;
    } 
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    var value = d.toISOString();
    return value.match(/\d{4}-\d{2}-\d{2}/) + ' ' + value.match(/\d{2}:\d{2}/);
}

module.exports = function (date) {
    v.value = date;
    return v;

};
