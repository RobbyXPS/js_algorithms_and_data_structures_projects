function palindrome(str) {
  //same as /w but without the "_"
  let regex = /[a-zA-Z0-9]/g
  //convert string to lowercase, run it through regex and join it back...then compair to same thing that is reversed
  return str.toLowerCase().match(regex).join() == str.toLowerCase().match(regex).reverse().join()
}

palindrome("_eye")