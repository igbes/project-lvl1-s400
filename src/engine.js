import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);

const randomInteger = () => {
  const min = 1;
  const max = 100;
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const isEven = num => num % 2 === 0;

const rightAnswer = (n) => {
  const res = isEven(n) ? 'yes' : 'no';
  return res;
};

const numSteps = 3;

const getEven = () => {
  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionExpression = randomInteger();
    console.log('question: ', questionExpression);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer(questionExpression)) {
      console.log('Correct!');
      iter(count - 1);
    } else if (answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    } else if (answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    } else {
      console.log("Incorrect value! Enter 'yes' other 'no' only!");
    }
  };
  return iter(numSteps);
};

export default getEven;
