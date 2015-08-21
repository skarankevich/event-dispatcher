(function (root, constructor) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = constructor;
    } else {
        root.EventDispatcher = constructor;
    }
}(this, (function () {
    function EventDispatcher() {
        this.subscriptions = {};
    }

    EventDispatcher.prototype.subscribe = function (eventNames, callbackFunction) {
        ([].concat(eventNames)).forEach(function (eventName) {
            var eventSubscriptions = this.subscriptions[eventName];

            if (typeof eventSubscriptions === 'undefined') {
                eventSubscriptions = this.subscriptions[eventName] = [];
            }

            if (typeof callbackFunction !== 'function') {
                return;
            }

            eventSubscriptions.push(callbackFunction);
        }.bind(this));
    };

    EventDispatcher.prototype.trigger = function (eventNames) {
        var callbackArguments = Array.prototype.splice.call(arguments, 1);

        ([].concat(eventNames)).forEach(function (eventName) {
            var eventSubscriptions = this.subscriptions[eventName];

            if (typeof eventSubscriptions === 'undefined') {
                return;
            }

            for (var index in eventSubscriptions) {
                eventSubscriptions[index].apply(null, callbackArguments);
            }
        }.bind(this));
    };

    EventDispatcher.prototype.unsubscribe = function (eventNames) {
        ([].concat(eventNames)).forEach(function (eventName) {
            if (typeof this.subscriptions[eventName] !== 'undefined') {
                delete this.subscriptions[eventName];
            }
        }.bind(this));
    };

    return EventDispatcher;
}())));
