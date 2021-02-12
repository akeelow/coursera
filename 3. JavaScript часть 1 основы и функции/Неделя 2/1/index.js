/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var results = tweet.split(' ').filter(getTags).map(delHashSymbol);

    function getTags(word, index) {
        var tag = word;
        return tag.startsWith('#');
    }

    function delHashSymbol(word, index){
        return word.slice(1);
    }

    return results;
};
