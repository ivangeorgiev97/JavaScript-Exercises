// returns promise
async function testAsyncF() {
  return "Hello";
}

async function testAsyncAwaitF() {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("myPromise is resolved"), 3000)
    });

    let result = await myPromise; // it will wait until the promise is resolved

    console.log(result);
}

console.log("Async and await:")
testAsyncF().then(console.log);
testAsyncAwaitF();
