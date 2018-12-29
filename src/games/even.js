import readlineSync from 'readline-sync';
import { randomInteger } from '../utils';

const isEven = num => num % 2 === 0;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
};

export const even = () => {
  const yesOrNo = n => (isEven(n) ? 'yes' : 'no');
  const question = randomInteger();
  const rightAnswer = yesOrNo(question);
  console.log('question: ', question);
  const answer = readlineSync.question('Your answer: ');
  return [rightAnswer, answer];
};
