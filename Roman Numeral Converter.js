function convertToRoman(num) {
  let romanNumeralConverterResult = "";

  while (num > 0) {
    if (num < 4) {
      romanNumeralConverterResult += "I";
      num -= 1;
    } else if (num === 4) {
      romanNumeralConverterResult += "IV";
      num -= 4;
    } else if (num >= 5 && num < 9) {
      romanNumeralConverterResult += "V";
      num -= 5;
    } else if (num === 9) {
      romanNumeralConverterResult += "IX";
      num -= 9;
    } else if (num >= 10 && num < 40) {
      romanNumeralConverterResult += "X";
      num -= 10;
    } else if (num >= 40 && num < 50) {
      romanNumeralConverterResult += "XL";
      num -= 40;
    } else if (num >= 50 && num < 90) {
      romanNumeralConverterResult += "L";
      num -= 50;
    } else if (num >= 90 && num < 100) {
      romanNumeralConverterResult += "XC";
      num -= 90;
    } else if (num >= 100 && num < 400) {
      romanNumeralConverterResult += "C";
      num -= 100;
    } else if (num >= 400 && num < 500) {
      romanNumeralConverterResult += "CD";
      num -= 400;
    } else if (num >= 500 && num < 900) {
      romanNumeralConverterResult += "D";
      num -= 500;
    } else if (num >= 900 && num < 1000) {
      romanNumeralConverterResult += "CM";
      num -= 900;
    } else if (num >= 1000) {
      romanNumeralConverterResult += "M";
      num -= 1000;
    } else {
      romanNumeralConverterResult += "";
      num -= 1;
    }
  }
 return romanNumeralConverterResult;
}

convertToRoman(36);
console.log(convertToRoman(2014));