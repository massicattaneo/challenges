function PromiseThunk(fn) {
    var args = [].slice.call(arguments, 1);
    var promise = new Promise(function (resolve) {
        args.splice(0,0,resolve);
        fn.apply(null, args);
    });
    return function (callback) {
        promise.then(callback)
    };
}