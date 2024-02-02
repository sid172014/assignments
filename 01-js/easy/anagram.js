/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  if(str1.length == str2.length){
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(let i=0;i<str1.length;i++){
    let temp = false;
    for(let j=0;j<str2.length;j++){
      if(str1[i] == str2[j]){
        temp = true;
      }
    }
    if(temp === false){
      return false;
    }
  }
  return true;
  }else{
    return false;
  }
};

module.exports = isAnagram;
