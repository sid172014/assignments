/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {  
  tempStr = "";
  for(let i=0;i<str.length;i++){
    if(str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z')
    tempStr = tempStr + str[i].toLowerCase();
  }
  for(let i=0;i<tempStr.length/2;i++){
    if(tempStr[i] !== tempStr[tempStr.length-i-1]){
      return false; 
    }
  }
  return true;
};
module.exports = isPalindrome;
