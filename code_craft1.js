function doTheJob(jobArg1, jobArg2, callback) {
    //
    callback();
}

curry(doTheJob("arg1", () => {
    console.log("done 1")
}))
curry(doTheJob("arg1", "arg2", () => {
    console.log("done 2")
}))

function curry(fn) {
    console.log(fn)
    return function(a) {
        return function(b) {
            return doNotTrack(a, b);
        }
    }
}