// call `beforeAll` function and pass it a callback function, call it `done` or whatever you like
beforeAll('async test example', function(done) {
    // call asyncFunction and pass it an anonymous callback function
    asyncFunction(parameter, function() {
        // all code inside this anonymous callback function will only run
        // after asyncFunction has finished

        console.log('This console.log will run after asyncFunction finishes successfully'); // good

        // `beforeAll` function's callback function is called here inside asyncFunction's
        // anonymous function in order to signal that `beforeAll` function is only finished now
        // If we don't call `done` here, but call it outside of this anonymous function
        // then done will signal that `beforeAll` has finished without waiting
        // for `loadFeed` to finish, which is not good.
        done();
    )};  //.asyncFunction

    console.log('This console.log will NOT wait for asyncFunction to finish. It will just run after asyncFunction is called'); // only good if this task doesn't need to wait for `asyncFunction` to finish
}); //.beforeAll
