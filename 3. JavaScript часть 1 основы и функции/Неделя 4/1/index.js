/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */


function selectAll(params) {
    var arr = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i][0] == 'select') {
            if (arr.length == 0) {
                arr = arr.concat(params[i][1]);
            } else {
                var a = params[i][1];
                var b = [];
                for (let j = 0; j < a.length; j++) {
                    if (arr.indexOf(a[j]) !== -1) {
                        b.push(a[j]);
                    };
                    
                }
                arr = b;
            }
            
        }    
    }
    //console.log(arr.length == 0);
    return arr;
}

function newFilter(args) {
    var result = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i][0] == 'filter') {
            var arr = [];
            var tmps = args[i][1];
                for (let k = 0; k < result.length; k++) {
                    for (let j = 0; j < tmps[1].length; j++) {
                        if (result[k][tmps[0]].indexOf(tmps[1][j]) !== -1) {
                        arr = arr.concat(result[k]);
                    }
                    
                }
            }
            result = arr;
        };
        
    }
    //console.log(result);
    return result;
}

function query(collection) {
    var resultCollections = [];
    var args = [].slice.call(arguments);
    if (args.length == 1) {
        var result = [];
        for (let i = 0; i < collection.length; i++) {
            result.push(Object.assign({}, collection[i])); 
            
        }
        return collection;    
    } 
    var sel = selectAll(args);
    var coll = newFilter(args);
     // name , gender

    for (let i = 0; i < coll.length; i++) { //Проходим по всем объектам коллекции
        var obj = coll[i]; // Объект коллекции
//        if (isFiltered(obj, args)) {
        var newObj = {}; //Пустой объект, которому надо создать новые свойства
        if (sel.length > 0) {
            
        
            for (let j = 0; j < sel.length; j++) {  //Проходим по всем параметрам SELECT
                if (obj.hasOwnProperty(sel[j])) {
                    newObj[sel[j]] = obj[sel[j]];
                }
            }
        } else {
            newObj = Object.assign({}, obj);
        }
            resultCollections.push(newObj);
//        }

    }
    return resultCollections;
}

/**
 * @params {String[]}
 */
function select() {
    var args = [];
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
        
    }
    return ['select', args];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filter', [property, values]];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
