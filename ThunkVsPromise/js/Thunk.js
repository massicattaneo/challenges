function Thunk(fn) {
    var args = [].slice.call(arguments, 1);
    return function (callback) {
        args.splice(0,0,callback);
        fn.apply(null, args);
    }
}