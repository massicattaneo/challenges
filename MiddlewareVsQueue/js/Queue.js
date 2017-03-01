var Queue = function () {};
Queue.prototype.array = [];
Queue.prototype.run = function (fn) {
    this.array.push(fn);
};
Queue.prototype.stop = function (name) {
    if (Queue.breakpoint.type === name) {
        this.run(Queue.breakpoint.callback);
    }
};
Queue.prototype.go = function (next) {
    var self = this;
    self.run(next);
    function go() {
        self.array.splice(0, 1)[0].call(self, go);
    }
    go();
};
Queue.Breakpoint = function (type, callback) {
    this.type = type || '';
    this.callback = callback || function (next) {next()};
};
Queue.breakpoint = new Queue.Breakpoint();
Queue.lines = 23;