var btn_1 = document.getElementById("submit_1");
var btn_2 = document.getElementById("submit_2");
var btn_3 = document.getElementById("submit_3");
var btn_4 = document.getElementById("submit_4");

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
  var pattern = /^\+?(88)?-?01([1-9]){1}[0-9]{8}$/g;
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
