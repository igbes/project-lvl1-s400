import readlineSync from 'readline-sync';
import { randomInteger, askName } from '../utils';
import engine from '../game-engine';

const isEven = num => num % 2 === 0;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
};

const even = () => {
  const yesOrNo = n => (isEven(n) ? 'yes' : 'no');
  const question = randomInteger();
  const rightAnswer = yesOrNo(question);
  console.log('question: ', question);
  const answer = readlineSync.question('Your answer: ');
  return [rightAnswer, answer];
};

export default() => engine(greeting, askName, even);
