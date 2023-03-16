const doWorkCallback = (callback) => {
    setTimeout(() => {
        /*callback(undefined, [1, 4, 7])
         */
        callback('This is my error', undefined)
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})