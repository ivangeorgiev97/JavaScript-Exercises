var str1 = "testStr13";
var str2 = "testStrtest";

let findLongestCommon = (str1, str2, x, y) => {
  if (str1 === str2) {
    return str1.length;
  } else if (x === 0 || y === 0) {
    return 0;
  } else if (str1.charAt(x - 1) === str2.charAt(y - 1)) {
    return 1 + findLongestCommon(str1, str2, x - 1, y - 1);
  } else {
    return Math.max(
      findLongestCommon(str1, str2, x - 1, y),
      findLongestCommon(str1, str2, x, y - 1)
    );
  }
};

console.log("Longest common:");
console.log(findLongestCommon(str1, str2, str1.length, str2.length));