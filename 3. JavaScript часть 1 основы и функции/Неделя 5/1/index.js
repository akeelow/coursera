module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {

        var run = handler.bind(subscriber);
        return run();
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

    },

    /**
     * @param {String} event
     */
    emit: function (event) {

    }
};
