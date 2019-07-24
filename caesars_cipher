function rot13(str) { // LBH QVQ VG!
  //alphabet array to cycle through
  let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  //array to hold letters  
  let ciphered = [];

  //return a new index that is shifted 13 spots and doesn't go over 26
  function findNewIndex(num) {
    let index = num;
    //shift (i) 13 times
    for (let i = 0; i < 13; i++) {
      index = index + 1;
      //if you get to the end of the alphabet start over
      if (index == 26) {
        index = 0
      }
    }
    return index;
  }
  
    //iterate over the supplied string
    for (let i = 0; i < str.length; i++) {
        //check to see if the current character is in the alphabet, if it is then return a shifted character
        if (alphabet.indexOf(str[i]) != -1) {
            ciphered.push(alphabet[findNewIndex(alphabet.indexOf(str[i]))])
        } else {
            ciphered.push(str[i])
        }
    }
  //combine the array to a string and return it
  return ciphered.join("")
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");