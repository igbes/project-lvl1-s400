
import { randomInteger, askName } from '../utils';
import engine from '../game-engine';

const algoritmEvklid = (a, b) => {
  if (b === 0) return a;
  const res = algoritmEvklid(b, a % b);
  return String(res);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
};

const gcd = () => {
  const elemOne = randomInteger();
  const elemTwo = randomInteger();
  const rightAnswer = algoritmEvklid(elemOne, elemTwo);
  const question = (`${elemOne} ${elemTwo}`);
  return [rightAnswer, question];
};

export default() => engine(greeting, askName, gcd);
