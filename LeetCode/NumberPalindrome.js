var isPalindrome = (number) => {
  let reverseNum = [];
  for (let i = number.toString().length; i > 0; i--) {
    reverseNum.push(number.toString()[i - 1]);
  }
  console.log(parseInt(reverseNum.join("")));
  return parseInt(reverseNum.join("")) === number;
};

console.log(isPalindrome(5335));
