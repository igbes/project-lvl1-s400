import randomInteger from '../utils';
import engine from '../game-engine';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const iter = (num) => {
    if (num < 2) return true;
    if (number % num === 0) return false;
    return iter(num - 1);
  };
  return iter(number - 1);
};

const yesOrNo = num => (isPrime(num) ? 'yes' : 'no');

const prime = () => {
  const randomNumber = randomInteger(1, 100);
  const rightAnswer = String(yesOrNo(randomNumber));
  const question = (`${randomNumber}`);
  return [rightAnswer, question];
};

export default() => engine(task, prime);
