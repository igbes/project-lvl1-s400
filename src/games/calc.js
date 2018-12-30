
import { randomInteger } from '../utils';
import engine from '../game-engine';

const listMathOperation = ['+', '-', '*'];

const resultOperatrion = (typeOretation, valOne, valTwo) => {
  switch (typeOretation) {
    case '+':
      return valOne + valTwo;
    case '-':
      return valOne - valTwo;
    case '*':
      return valOne * valTwo;
    default:
      return 'fail';
  }
};

/*
const resultOperatrion = (typeOretation, valOne, valTwo) => {
  if (typeOretation === '+') return String(valOne + valTwo);
  if (typeOretation === '-') return String(valOne - valTwo);
  return String(valOne * valTwo);
};
*/
const task = () => 'What is the result of the expression?';

const calc = () => {
  const elemOne = randomInteger(1, 10);
  const elemTwo = randomInteger(1, 10);
  const typeOretation = listMathOperation[randomInteger(0, listMathOperation.length - 1)];
  const rightAnswer = resultOperatrion(typeOretation, elemOne, elemTwo);
  const question = (`${elemOne} ${typeOretation} ${elemTwo}`);
  return [rightAnswer, question];
};

export default() => engine(task, calc);
