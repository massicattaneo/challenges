var Middleware = function() {};
Middleware.prototype.run = function(fn) {
    var self = this;
    this.go = (function(stack) {
        return function(next) {
            stack.call(self, function() {
                fn.call(self, function () {
                    next.call(self)
                });
            });
        }.bind(this);
    })(this.go);
};
Middleware.prototype.stop = function(name) {
    if (Middleware.breakpoint.type === name) {
        this.run(Middleware.breakpoint.callback);
    }
};
Middleware.prototype.go = function(next) {
    next();
};
Middleware.Breakpoint = function (type, callback) {
    this.type = type || '';
    this.callback = callback || function (next) {next()};
};
Middleware.breakpoint = new Middleware.Breakpoint();
Middleware.lines = 26;