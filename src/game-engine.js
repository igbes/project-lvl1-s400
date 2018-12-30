import readlineSync from 'readline-sync';
import { askName } from './utils';

const numSteps = 3;

const engine = (task, calcParametrs) => {
  console.log('Welcome to the Brain Games!');
  task();
  const userName = askName();
  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [rightAnswer, question] = calcParametrs();
    console.log('question: ', question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      iter(count - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    }
  };
  iter(numSteps);
};
export default engine;
