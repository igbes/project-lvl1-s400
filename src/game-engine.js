import readlineSync from 'readline-sync';
// import { askName } from './utils';

const askName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const numSteps = 3;

const engine = (task, calcParametrs) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
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
      console.log(`Let's try again, ${userName}!`);
    }
  };
  iter(numSteps);
};
export default engine;
