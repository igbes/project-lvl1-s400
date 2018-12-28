import readlineSync from 'readline-sync';

const randomInteger = (min = 1, max = 100) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const isEven = num => num % 2 === 0;

const rightAnswer = n => (isEven(n) ? 'yes' : 'no');

const numSteps = 3;

const getEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

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
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer(questionExpression)}'.`);
    }
  };
  return iter(numSteps);
};

export default getEven;
