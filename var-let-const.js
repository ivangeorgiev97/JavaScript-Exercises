var num1 = 13;

// only Block SCope
{
  let num1 = 6;
}

// const array but elements are not unchangeable
const favouriteNumbers = [13, 6, 9];

favouriteNumbers.push(49);

document.getElementById("result1-0").innerHTML =
  "let has block scope and cannot be accessed from outside so the result is: " +
  num1;

document.getElementById("result1-1").innerHTML =
  "favourite numbers: " + favouriteNumbers;
