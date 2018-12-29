import readlineSync from 'readline-sync';
import { randomInteger } from '../utils';

const alg = (a, b) => {
  if (b === 0) return a;
  const res = alg(b, a % b);
  return String(res);
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
};

export const gcd = () => {
  const elemOne = randomInteger();
  const elemTwo = randomInteger();
  const rightAnswer = alg(elemOne, elemTwo);
  const question = (`${elemOne} ${elemTwo}`);
  console.log('question: ', question);
  const answer = readlineSync.question('Your answer: ');
  return [rightAnswer, answer];
};
