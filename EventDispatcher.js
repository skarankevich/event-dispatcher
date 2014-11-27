function EventDispatcher() {
    this.subscriptions = {};
}

EventDispatcher.prototype.subscribe = function (eventName, callbackFunction) {
    var eventSubscriptions = this.subscriptions[eventName];

    if (typeof eventSubscriptions === 'undefined') {
        eventSubscriptions = this.subscriptions[eventName] = [];
    }

    if (typeof callbackFunction !== 'function') {
        return;
    }

    eventSubscriptions.push(callbackFunction);
};

EventDispatcher.prototype.trigger = function (eventName, data) {
    var eventSubscriptions = this.subscriptions[eventName];

    if (typeof eventSubscriptions === 'undefined') {
        return;
    }

    for (var index in eventSubscriptions) {
        eventSubscriptions[index](data, eventName);
    }
};
