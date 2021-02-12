// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var isValidTime = require('./index.js');

assert.equal(isValidTime(12, 30), true, 'Время 12:30 валидное.');
assert.equal(isValidTime(12, 61), false, 'Время 12:61 невалидное');
assert.equal(isValidTime('e', 5), false, 'Не число');
assert.equal(isValidTime(1.2 , 5), false, 'Не число');

console.info('OK!');
