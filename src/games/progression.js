
import randomInteger from '../utils';
import engine from '../game-engine';

const task = 'What number is missing in the progression?';

const lengthProgression = 10;

const getProgression = (firstValue, step) => {
  const iter = (acc, element) => {
    if (acc.length === lengthProgression) return acc;
    return iter(acc.concat(element), element + step);
  };
  return iter([], firstValue);
};

const firstElement = () => randomInteger(1, 50);
const stepProgression = () => randomInteger(2, 5);
const randomElement = () => randomInteger(0, lengthProgression - 1);

const progression = () => {
  const arrayProgression = getProgression(firstElement(), stepProgression());
  const hiddenElementPosition = randomElement();
  const rightAnswer = String(arrayProgression[hiddenElementPosition]);
  arrayProgression[hiddenElementPosition] = '..';
  const question = arrayProgression.join(' ');
  return [rightAnswer, question];
};

export default() => engine(task, progression);
