function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    let vowels =['a','e','i','o','u']
    let letters = str.split('')
    for(let i = 0; i<letters.length; i++){
      if(vowels.includes(letters[i])){
         vowelsCount++
         }
    }
    return vowelsCount;
  }