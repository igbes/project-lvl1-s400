import readlineSync from 'readline-sync';
import { randomInteger, askName } from '../utils';
import engine from '../game-engine';

const listMathOperation = ['+', '-', '*'];

const resultOperatrion = (typeOretation, valOne, valTwo) => {
  if (typeOretation === '+') return String(valOne + valTwo);
  if (typeOretation === '-') return String(valOne - valTwo);
  return String(valOne * valTwo);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
};

const calc = () => {
  const elemOne = randomInteger(1, 10);
  const elemTwo = randomInteger(1, 10);
  const typeOretation = listMathOperation[randomInteger(0, 2)];
  const rightAnswer = resultOperatrion(typeOretation, elemOne, elemTwo);
  const question = (`${elemOne} ${typeOretation} ${elemTwo}`);
  console.log('question: ', question);
  const answer = readlineSync.question('Your answer: ');
  return [rightAnswer, answer];
};

export default() => engine(greeting, askName, calc);
