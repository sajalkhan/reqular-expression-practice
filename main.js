var btn_1 = document.getElementById("submit_1");
var btn_2 = document.getElementById("submit_2");
var btn_3 = document.getElementById("submit_3");
var btn_4 = document.getElementById("submit_4");
var btn_5 = document.getElementById("submit_5");
var btn_6 = document.getElementById("submit_6");
var btn_7 = document.getElementById("submit_7");
var btn_8 = document.getElementById("submit_8");
var btn_9 = document.getElementById("submit_9");
var btn_10 = document.getElementById("submit_10");

//!👇 button-1 a click korle eta call hobe
btn_1.addEventListener("click", function () {
  var input = document.getElementById("input_1").value;
  var output = document.getElementById("output_1");
  output.textContent = "Result: ";

  //!👇 regex er pattern ta likhbo akhon
  var pattern = /^\d+$/g;
  var result = pattern.test(input);
  output.textContent += result;
});

//!🌟🌟
/**
 Example:
 1. 12345
 2. 3453345 
 3. abas1232: false
 */

//!👇 button-2 a click korle eta call hobe
btn_2.addEventListener("click", function () {
  var input = document.getElementById("input_2").value;
  var output = document.getElementById("output_2");
  output.textContent = "Result: ";

  //!👇 regex er pattern ta likhbo akhon
  var pattern = /^[5-9A-D]{3,6}$/gi;
  var result = pattern.test(input);
  output.textContent += result;
});

//!🌟🌟
/**
  Example:
  1. ab555 : true
  2. 55ab : true
  3. 5a5a : true
  4. 5a5555555 : false 
 */

//!👇 button-3 a click korle eta call hobe
btn_3.addEventListener("click", function () {
  var input = document.getElementById("input_3").value;
  var output = document.getElementById("output_3");
  output.textContent = "Result: ";

  //!👇 regex er pattern ta likhbo akhon
  var pattern = /^\+?(88)?-?01([3-9]){1}[0-9]{8}$/g;
  var result = pattern.test(input);
  output.textContent += result;
});

//!🌟🌟
/**
  Example:
  1. +88-01740980351 : true
  2. 01740980351 : true
  3. 8801740980351 : true
  4. +8801740980351 : true
  5. 88801740980351: false
  6. 010740980351: false
  7. 017409803511: false 
  8. 01040980351: false
 */

//!👇 button-4 a click korle eta call hobe
btn_4.addEventListener("click", function () {
  var input = document.getElementById("input_4").value;
  var output = document.getElementById("output_4");
  output.textContent = "Result: ";

  //!👇 regex er pattern ta likhbo akhon
  var pattern = /^(\w){2,15}@(gmail|ymail|outlook){1}[.](\w){2,5}$/gi;
  var result = pattern.test(input);
  output.textContent += result;
});

/**
   Example:
   1. sajal@gmail.com
   2. sajal1234@gmail.com
   3. 123_sajal@ymain.com
   4. 1233@gmail.com : false
   5. sajal@test.com : false
 */

//!👇 button-5 a click korle eta call hobe
btn_5.addEventListener("click", function () {
  var input = document.getElementById("input_5").value;
  var output = document.getElementById("output_5");
  output.textContent = "Result: ";

  //!👇 regex er pattern ta likhbo akhon
  var pattern = /\d+/g;
  // var result = pattern.exec(input); //!👈 aita exeact matching index return kore
  var result = "";
  while ((digits = pattern.exec(input)) !== null) {
    result += `${digits}  - ${digits.index} ,`;
  }
  output.textContent += result;
});

/**
 * Example
 * 1. it as 12 digit and 13 words
    output: Result: 12 - 6 13 - 19
 */

//!👇 button-6 a click korle eta call hobe
btn_6.addEventListener("click", function () {
  var input = document.getElementById("input_6").value;
  var output = document.getElementById("output_6");
  output.textContent = "Result: ";

  //!👇 regex er pattern ta likhbo akhon
  var pattern = /(\d{2})-(\d{2})-(\d{4})/g;
  // var result = pattern.exec(input); //!👈 aita exeact matching index return kore
  var result = "";
  while ((digits = pattern.exec(input)) !== null) {
    result += digits[0] + ": ";
    result += digits[1] + ": ";
    result += digits[2] + ": ";
    result += digits[3] + ", <br>";
  }
  output.innerHTML = result;
  input.value = " ";
});

/**
 * Example:
 * 1. 02-12-2020  and 02-12-2021
 * output: 02-12-2020 02: 12: 2020,
 *         02-12-2021 02: 12: 2021
 */

//!👇 button-7 a click korle eta call hobe
btn_7.addEventListener("click", function () {
  var input = document.getElementById("input_7").value;
  var output = document.getElementById("output_7");
  output.textContent = "Result: ";

  output.innerHTML += input.replace(/[^\w\s]/gi, "");
});

/**
 * Example:
 * This is te$xt wi%th s*ome speIcial characters
 * output: This is text with some speIcial characters
 */

//!👇 button-8 a click korle eta call hobe
btn_8.addEventListener("click", function () {
  var input = document.getElementById("input_8").value;
  var output = document.getElementById("output_8");
  output.textContent = "Result: ";
  //!👉 $2 $1 aita diye kon group age pore hobe seta bole dei
  //!👉 $& aita diye full group copy kore
  output.innerHTML += input.replace(/(\w+) (\w+) (\w+)/gi, "$3 $2 $1 $&");
});

/**
 * Example:
 * input: sohrab hossain sajal
 * output:  sajal hossain sohrab
 */

//TODO: 📗 https://javascript.info/regexp-lookahead-lookbehind
//!👇 button-9 a click korle eta call hobe
btn_9.addEventListener("click", function () {
  var input = document.getElementById("input_9").value;
  var output = document.getElementById("output_9");
  output.textContent = "Result: ";
  var pattern = /^(?=ISBN)ISBN-\d{3}-\d{4}$/g;
  var result = pattern.test(input);

  output.innerHTML += result;

  //! 👉 (?=ISBN) aita hocce lookahead er kaj korce
  //! 👉 text ISBN diye suru hote hobe must eita bole dicce ai khane
});

/**
 * Example
 * 1. ISBN-123-1234: true
 */

btn_10.addEventListener("click", function () {
  var input = document.getElementById("input_10").value;
  var output = document.getElementById("output_10");
  output.textContent = "Result: ";
  var pattern = /^(?=.*\d+.*)(?=.*[A-Z]+.*)\w{4,8}/g;
  var result = pattern.test(input);

  output.innerHTML += result;
});

/**
 
  /^(?=.*\d+.*)(?=.*[A-Z]+.*)\w{4,8}/g
  //!👆1st block 👆2nd block  👆 check it

  explain: 1st block check korbe j any char, digit, word ache kina
           2nd block check korbe j any char, word A-Z capital r any char ache kina
           
 */
