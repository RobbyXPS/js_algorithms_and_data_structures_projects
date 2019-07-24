function convertToRoman(num) {
  //capture input value in internal var
  let myNum = num;

  //map number values to roman numeral values
  var numberValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  //variable to hold return value
  var romanString = '';

  //for each decimal to roman numeric value mapping (13 mappings)
  for (let i = 0; i < numberValue.length; i++) {
    //compair supplied number down the chain array of decimal number values
    while (numberValue[i] <= myNum) {
      //add the roman numeral string to the return string
      romanString = romanString + romanNumeral[i];
      //decrement the number value so it can be compaired to the next number in the decimal numer array
      myNum = myNum - numberValue[i]
    }
  }
  //return the string of roman numerals
  return romanString;
}

convertToRoman(3999)