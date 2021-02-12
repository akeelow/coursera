/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var operations = [].slice.call(arguments, 1);
    
    return operations.reduce(function(resultcol, operation) {
        //console.log(operation);
        return operation(resultcol);
    }, collection);
}

/**
 * @params {String[]}
 */
function select() {

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filteredAll(items) {
        return items.filter(function (item) {
            return (values.indexOf(item[property]) > -1)
        });
        }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
