const simpleArray = [3, 6, 13];

const newSimpleArray = [...simpleArray, 47, 49];

const simpleObject = {
  hobby: "gaming"
};

const newSimpleObject = {
  ...simpleObject,
  age: 22
};

const testRestOperator = (...a) => {
  return a.filter(e => e === 13);
};


console.log("Simple array:");
console.log(simpleArray);

console.log("New simple array:");
console.log(newSimpleArray);

console.log("Simple object:");
console.log(simpleObject);

console.log("New simple object:");
console.log(newSimpleObject);

console.log("Rest operator:");
console.log(testRestOperator(7, 15, 24, 13, 22, 13, 25));
