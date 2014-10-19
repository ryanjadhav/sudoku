EventAggregator = function() {
    this.events = {};
}

EventAggregator.prototype.trigger = function (msg) {
    var args = Array.prototype.splice.call(arguments, 1);
    for (var i = 0, len = this.events[msg].length; i < len; i++) {
        this.events[msg][i].apply(this, args);
    }
}

EventAggregator.prototype.on = function (msg, func) {
    if (!this.events[msg]) {
        this.events[msg] = [];
    }
    this.events[msg].push(func);
}

EventAggregator.prototype.off = function (msg, func) {
    for (var i = 0, len = this.events[msg].length; i < len; i++) {
        if (this.events[msg][i] === func) {
            this.events[msg].splice(i, 1);
        }
    }
}
