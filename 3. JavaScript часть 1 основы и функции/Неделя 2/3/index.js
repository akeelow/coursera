// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    if (!command) return false;

    var commands = command.split(' ');

    switch (commands[0]) {
        case 'ADD':
            var user = commands[1];
            var phones = commands[2].split(',');
            if (!phoneBook.hasOwnProperty(user)) {
                phoneBook[user] = phones;
            } else {
                phoneBook[user] = phoneBook[user].concat(phones);
            }                    
            break;

        case 'SHOW':
            var results = [];
            var keys = Object.keys(phoneBook);
            for (var i = 0; i < keys.length; i++) {
                results.push(keys[i] + ': ' + phoneBook[keys[i]].join(', '));
            }
            return results.sort();
            break;

        case 'REMOVE_PHONE':
            var phone = commands[1];
            var keys = Object.keys(phoneBook);
            for (var i = 0; i < keys.length; i++) {
                var index = phoneBook[keys[i]].indexOf(phone);
                if (index !== -1) {
                    var removed = phoneBook[keys[i]].splice(index, 1);
                    if (removed.length > 0) {
                        if (phoneBook[keys[i]].length == []) {
                            delete phoneBook[keys[i]];
                        }
                        return true;
                    } 
                }

            }
            return false;
            break;

        default:
            break;
    }
};
