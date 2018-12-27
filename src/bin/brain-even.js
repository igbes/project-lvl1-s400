#!/usr/bin/env node

import greeting from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');

const userName = greeting();
console.log(`Hello, ${userName}!`);

const isEven = num => Boolean(!(num % 2));

const randomInteger = () => {
  const min = 1;
  const max = 100;
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const boolAnswer = {
  yes: true,
  no: false,
};

const failAnswer = {
  yes: "'yes' is wrong answer ;(. Correct answer was 'no'.",
  no: "'no' is wrong answer ;(. Correct answer was 'yes'.",
};

const rightAnswer = 'Correct!';

const conversation = (number, func) => {
  console.log('question: ', number);
  const answer = readlineSync.question('Your answer: ');
  if (boolAnswer[answer] === func(number)) {
    return rightAnswer;
  }
  return failAnswer[answer];
};


const getEven = (n) => {
  const iter = (count, integer) => {
    if (count === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const result = conversation(integer, isEven);
    console.log(result);
    if (result === rightAnswer) {
      return iter(count - 1, randomInteger());
    }
    console.log('Try again!');
  };
  return iter(n, randomInteger());
};

const numSteps = 3;
getEven(numSteps);
