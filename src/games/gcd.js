
import randomInteger from '../utils';
import engine from '../game-engine';

const algoritmEvklid = (a, b) => {
  if (b === 0) return a;
  return algoritmEvklid(b, a % b);
};

const task = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const elemOne = randomInteger();
  const elemTwo = randomInteger();
  const rightAnswer = String(algoritmEvklid(elemOne, elemTwo));
  const question = (`${elemOne} ${elemTwo}`);
  return [rightAnswer, question];
};

export default() => engine(task, gcd);
