function telephoneCheck(str) {
  //define all the regex variables to determine a valid number format
  let regexFormat1 = /^\d{3}-\d{3}-\d{4}/
  let regexFormat2 = /^\d{1} \d{3}-\d{3}-\d{4}/
  let regexFormat3 = /^1 [(]\d{3}[)] \d{3}-\d{4}/
  let regexFormat4 = /^\d{10}$/
  let regexFormat5 = /^\(d{3}/
  let regexFormat6 = /^\(\d{3}\)\d{3}-\d{4}/
  let regexFormat7 = /^1 \d{3} \d{3} \d{4}/
  let regexFormat8 = /^1[(]\d{3}[)]\d{3}-\d{4}/

  //if the input string matches any valid format return true
  if (regexFormat1.test(str) || regexFormat2.test(str) || regexFormat3.test(str) || regexFormat4.test(str) || regexFormat5.test(str) || regexFormat6.test(str) || regexFormat7.test(str) || regexFormat8.test(str)) {
    return true
  } else {
    return false
  }

}

telephoneCheck("27576227382")