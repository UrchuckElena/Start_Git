"use strict";

function task1() {
  var age = document.getElementById('number1').value;
  age = parseInt(age);
  var rez = '';

  if (age >= 0 && age < 12) {
    rez = 'You are a child';
  } else if (age >= 12 && age < 18) {
    rez = 'You are a teenager';
  } else if (age >= 18 && age < 60) {
    rez = 'You are an adult';
  } else if (age >= 60) {
    rez = 'You are a pensioner';
  } else {
    rez = 'Invalid number';
  }

  document.getElementById('result_1').innerHTML = rez;
}

function task2() {
  var num = document.getElementById('number2').value;
  num = parseInt(num);
  var rez = '';

  switch (num) {
    case 0:
      rez = ')';
      break;

    case 1:
      rez = '!';
      break;

    case 2:
      rez = '@';
      break;

    case 3:
      rez = '#';
      break;

    case 4:
      rez = '$';
      break;

    case 5:
      rez = '%';
      break;

    case 6:
      rez = '^';
      break;

    case 7:
      rez = '&';
      break;

    case 8:
      rez = '*';
      break;

    case 9:
      rez = '(';
      break;

    default:
      rez = 'invalid number';
      break;
  }

  document.getElementById('result_2').innerHTML = rez;
}

function task3() {
  var num = document.getElementById('number3').value;
  num = parseInt(num);
  var rez = '';

  if ((num - num % 100) / 100 == num % 10) {
    rez = 'This number contains the same digits';
  } else if ((num - num % 100) / 100 == (num % 100 - num % 10) / 10) {
    rez = 'This number contains the same digits';
  } else if ((num % 100 - num % 10) / 10 == num % 10) {
    rez = 'This number contains the same digits';
  } else {
    rez = 'This number does not contain the same digits';
  }
  /*
  if (((num - num % 100) / 100 == num % 10) || ((num - num % 100) / 100 == (num % 100 - num % 10) / 10) || ((num % 100 - num % 10) / 10 == num % 10)) {
     rez = 'This number contains the same digits';
  } else {
      rez = 'This number does not contain the same digits';
  }
      */


  document.getElementById('result_3').innerHTML = rez;
}

function task4() {
  var year = document.getElementById('number4').value;
  year = parseInt(year);
  var rez = '';

  if (year % 4 == 0 && year % 100 !== 0) {
    rez = 'Leap year';
  } else {
    rez = 'Not leap year';
  }

  document.getElementById('result_4').innerHTML = rez;
}

function task5() {
  var num1 = document.getElementById('number5').value;
  num1 = parseInt(num1), res = '';

  if ((num1 - num1 % 1000) / 1000 == num1 % 10 * 10 + (num1 % 100 - num1 % 10) / 10) {
    res = "This number is a palindrome";
  } else {
    res = "This number is not a palindrome";
  }

  document.getElementById('result_5').innerHTML = res;
}

function task6() {
  var amount = document.getElementById('number_6').value;
  currency = document.getElementById('action_6').value;
  amount = parseInt(amount);
  var rez = 0;

  switch (currency) {
    case 'EUR':
      rez = amount * 0.85 + ' EUR';
      break;

    case 'UAN':
      rez = amount * 28.21 + ' UAN';
      break;

    case 'AZN':
      rez = amount * 1.70 + ' AZN';
      break;

    default:
      rez = 'invalid action';
      break;
  }

  document.getElementById('result_6').innerHTML = rez;
}

function task7() {
  var amount = document.getElementById('number_7').value;
  amount = parseInt(amount);
  var rez = '';

  if (amount >= 200 && amount < 300) {
    rez = amount / 100 * 97 + ' (payment with a 3% discount)';
  } else if (amount >= 300 && amount < 500) {
    rez = amount / 100 * 95 + ' (payment with a 5% discount)';
  } else if (amount >= 500) {
    rez = amount / 100 * 93 + ' (payment with a 7% discount)';
  } else if (amount < 200) {
    rez = amount + ' (You do not have discount)';
  } else {
    rez = 'Enter the value of purchase';
  }

  document.getElementById('result_7').innerHTML = rez;
}

function task8() {
  var num1 = document.getElementById('number8_1').value;
  num2 = document.getElementById('number8_2').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var radius = num1 / Math.PI;
  var sideOfSquare = num2 / 4;

  if (radius == sideOfSquare) {
    var _rez = 'Such circle can fit into the specified square';
  } else {
    rez = 'Such circle can not fit into the specified square';
  }

  document.getElementById('result_8').innerHTML = rez;
}

function task9() {
  var capital = prompt('What is the capital of Ukraine? 1 - Kyiv 2 - New York 3 - Paris');
  var currency = prompt('What is the currency of Ukraine? 1 - UAH 2 - UAH 3 - RMB');
  var country = prompt('What is the most populated country? 1 - the USA 2 - Japan 3 - China');
  var score = 0;
  if (capital == 1) score += 2;
  if (currency == 1) score += 2;
  if (country == 3) score += 2;
  alert('Your score is ' + score);
}