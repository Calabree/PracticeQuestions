function longest(s1, s2) {
    // your code
    var myList=[]
    var wordsToString= (s1+s2).split('')
    var listOfLetters = []
    wordsToString.forEach(element =>{
      if (!listOfLetters.includes(element)){
        listOfLetters.push(element)
      }
    })
    return listOfLetters.sort().join("")
  }