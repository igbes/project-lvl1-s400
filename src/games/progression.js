
import { randomInteger } from '../utils';
import engine from '../game-engine';

const task = 'What number is missing in the progression?';

const arr = () => {
  const lengthProgression = 10;
  const firstElement = randomInteger(1, 50);
  const step = randomInteger(2, 5);
  const iter = (acc, element) => {
    if (acc.length === lengthProgression) return acc;
    return iter(acc.concat(element), element + step);
  };
  return iter([], firstElement);
};

const progression = () => {
  const newArr = arr();
  const hiddenElementPosition = randomInteger(1, 10);
  const rightAnswer = String(newArr[hiddenElementPosition]);
  newArr[hiddenElementPosition] = '..';
  const question = newArr.join(' ');
  return [rightAnswer, question];
};

export default() => engine(task, progression);
