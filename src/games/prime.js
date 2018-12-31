import randomInteger from '../utils';
import engine from '../game-engine';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  const lastElem = Math.floor(Math.sqrt(number));
  const iter = (num) => {
    if (num === lastElem + 1 && lastElem > 2 ) return true;
    if (num === number) return true;
    if (number % num === 0) return false;
    return iter(num + 1);
  };
  return iter(2);
};

const yesOrNo = num => (isPrime(num) ? 'yes' : 'no');

const prime = () => {
  const randomNumber = randomInteger(-10, 100);
  const rightAnswer = yesOrNo(randomNumber);
  const question = (`${randomNumber}`);
  return [rightAnswer, question];
};

export default() => engine(task, prime);
