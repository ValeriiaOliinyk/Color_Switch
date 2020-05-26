/* eslint-disable no-use-before-define */

'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', startHandler);
refs.btnStop.addEventListener('click', stopHandler);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;
let isActive = false;

function changeColor() {
  const currentColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[currentColor];
}

function startHandler() {
  if (isActive === true) {
    return;
  }
  intervalId = setInterval(changeColor, 1000);
  isActive = true;
}

function stopHandler() {
  clearInterval(intervalId);
  isActive = false;
}
