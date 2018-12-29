
import { randomInteger, askName } from '../utils';
import engine from '../game-engine';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
};

const arr = () => {
  const firstElement = randomInteger(1, 90);
  const step = 2;
  const iter = (acc, element) => {
    if (acc.length === 10) return acc;
    return iter(acc.concat(element), element + step);
  };
  return iter([], firstElement);
};

const progression = () => {
  const newArr = arr();
  const emptyElement = randomInteger(1, 10);
  const rightAnswer = String(newArr[emptyElement]);
  newArr[emptyElement] = '..';
  const question = newArr.join(' ');
  return [rightAnswer, question];
};

export default() => engine(greeting, askName, progression);
