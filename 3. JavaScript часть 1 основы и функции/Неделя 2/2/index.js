/**
 * @param {String[]} hashtags
 * @returns {String}
 *
 */
module.exports = function (hashtags) {

    var results = [];
    var tags = hashtags.reduce(getTags, []);
    for (var i = 0; i < tags.length; i++) {
        if (results.indexOf(tags[i]) == -1) {
            results.push(tags[i]);
        }
        
    }
    function getTags(tags, item){
        return tags.concat(item.toLowerCase());
    }

 
    return results.join(', ');
};
