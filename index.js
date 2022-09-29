'use strict';

// #1 What will the console display and why?
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  });
}
/* var has a global scope. On each iteration of the loop we are dealing with the same variable. The var variable is one for all iterations of the loop and its visible even after the loop. Therefore, console will simply display the number 10 10 times. Сonsequently, for the loop to work correctly, the var variable should be replaced with let
 */

/* #2 Write a JavaScript program to display the current day and time in the following format.  */
const newFormatDate = () => {
  const today = new Date();
  const day = today.getDay();
  const daylist = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  console.log(`Today is: ${daylist[day]}.`);

  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = hour >= 12 ? 'PM' : 'AM';
  hour = hour >= 12 ? hour - 12 : hour;
  if (hour === 0 && prepand === 'PM') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = 'Noon';
    } else {
      hour = 12;
      prepand = 'PM';
    }
  }
  if (hour === 0 && prepand === 'AM') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = 'Midnight';
    } else {
      hour = 12;
      prepand = 'AM';
    }
  }
  console.log(`Current time is: ${hour}${prepand}:${minute}:${second}`);
};
newFormatDate();

// #3 Write a JavaScript function that reverse a number.

const reverseNum = num => {
  return (num = +num.toString().split('').reverse().join(''));
};
console.log(reverseNum(32243));

/* #4 Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.  */

const factorial = n => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(5));

/* #5 Write a JavaScript program that accepts two integers in prompt() and alert the larger one. */

// const larger = () => {
//   const num1 = window.prompt('Input the first integer', '0');
//   const num2 = window.prompt('Input the second integer', '0');

//   if (parseInt(num1, 10) > parseInt(num2, 10)) {
//     alert(`The larger of ${num1} and ${num2} is ${num1}.`);
//   } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
//     alert(`The larger of ${num1} and ${num2} is ${num2}.`);
//   } else {
//     alert(`The values ${num1} and ${num2} are equal.`);
//   }
// };
// larger();

/* #6 Write a simple JavaScript program to join all elements of the following array into a string */

const arrToString = () => {
  const myColor = ['Red', 'Green', 'White', 'Black'];
  console.log(myColor.join(','));
  console.log(myColor.join('+'));
};
arrToString();

/* #7 Write a JavaScript function to get the month name from a particular date.  */

const monthName = date => {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthList[new Date(date).getMonth()];
};
console.log(monthName('10/11/2009'));
console.log(monthName('11/13/2014'));

// #8 Write a JavaScript program to test the first character of a string is uppercase or not

const isUppercase = str => {
  /^[A-Z]/.test(str)
    ? console.log('First character is uppercase')
    : console.log('First character is not uppercase');
};
isUppercase('salo');
isUppercase('Salo');

// #9 Write a JavaScript program to draw a smile
window.onload = () => {
  let canvas = document.getElementById('myCanvas');
  let context = canvas.getContext('2d');
  // draw stuff here
  context.beginPath();
  //face
  context.arc(100, 100, 80, 0, Math.PI * 2, false);
  //smile
  context.moveTo(160, 100);
  context.arc(100, 100, 60, 0, Math.PI, false);
  //left eye
  context.moveTo(75, 70);
  context.arc(65, 70, 10, 0, Math.PI * 2, true);
  //right eye
  context.moveTo(135, 70);
  context.arc(125, 70, 10, 0, Math.PI * 2, true);
  context.stroke();

  context.lineWidth = 5;
  context.stroke();
};

// Part 2

// #1
const firstTask = () => {
  const string1 = document.querySelector('#string-1');
  const string2 = document.querySelector('#string-2');
  const string3 = document.querySelector('#string-3');
  const string4 = document.querySelector('#string-4');
  const string5 = document.querySelector('#string-5');
  const string6 = document.querySelector('#string-6');

  string3.after(string5);
  string5.after(string2);
  string2.after(string6);
  string6.after(string4);
  string4.after(string1);
};
firstTask();

// #2
const secondTask = () => {
  const elements = document.querySelectorAll('#task-2 .element');

  elements.forEach((item, index) => {
    if (index <= 2) {
      item.style.color = 'red';
    } else {
      item.style.color = 'green';
    }
  });
};
secondTask();

// #3
const thirdTask = () => {
  const todoList = document.querySelector('#task-3 #todo-list');
  const tasks = [
    'Buy lemonade',
    'Make toasts',
    'Repair car',
    'Play games',
    'Pet a cat',
  ];

  const render = task => {
    const newElement = document.createElement('li');
    newElement.classList.add('task');
    newElement.textContent = task;
    todoList.append(newElement);
  };

  tasks.forEach(task => render(task));
};
thirdTask();

// #4
const fourthTask = () => {
  const paragraphs = document.querySelectorAll('article p');

  const render = paragraph => {
    const hr = document.createElement('hr');
    paragraph.after(hr);
  };

  paragraphs.forEach(paragraph => render(paragraph));
};
fourthTask();

// #5
const fifthTask = () => {
  const cartItems = document.querySelectorAll('#cart-items .item');

  const newElement = document.createElement('div');
  newElement.classList.add('item');
  newElement.innerHTML = 'Canned Fish <span class="qty">x 4</span>';

  cartItems.forEach(item => {
    if (item.textContent.match(/Cola 1.5 l./gi)) item.remove();
    if (item.textContent.match(/Chocolate bar/gi))
      item.parentNode.replaceChild(newElement, item);
  });
};
fifthTask();

// #6
const sixthTask = () => {
  const start = document.querySelector('.start');
  const list = document.createElement('ul');

  start.after(list);

  const render = question => {
    const newAnswer = document.createElement('li');
    newAnswer.textContent = question;
    list.append(newAnswer);
  };

  start.addEventListener('click', () => {
    const askName = prompt('What is your name?');
    if (askName === null || askName.trim() === '') return;
    render(askName);

    const askLastName = prompt('What is your last name?');
    if (askLastName === null || askLastName.trim() === '') return;
    render(askLastName);

    const askAge = prompt('How old are you?');
    if (askAge === null || askAge.trim() === '') return;
    render(askAge);

    const askLocation = prompt('Where are you from?');
    if (askLocation === null || askLocation.trim() === '') return;
    render(askLocation);

    const askAction = prompt('What are you gonna do with your life?');
    if (askAction === null || askAction.trim() === '') return;
    render(askAction);
  });
};
sixthTask();
