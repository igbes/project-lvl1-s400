import readlineSync from 'readline-sync';
import { randomInteger } from '../utils';

const isEven = num => num % 2 === 0;

const even = () => {
  const yesOnNo = n => (isEven(n) ? 'yes' : 'no');
  const question = randomInteger();
  const rightAnswer = yesOnNo(question);
  console.log('question: ', question);
  const answer = readlineSync.question('Your answer: ');
  return [rightAnswer, answer];
};

export default even;
