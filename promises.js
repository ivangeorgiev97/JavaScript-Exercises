var x = 6;

var simplePromise = new Promise(function(resolve, reject) {
  if (x === 6) {
    resolve("x is 6");
  } else {
    reject("x is not 6");
  }
});

var testSimplePromise = function() {
  simplePromise
    .then(function(success) {
      console.log(success);
    })
    .catch(function(err) {
      console.log(err);
    });
};

console.log("Promises:");
testSimplePromise();
