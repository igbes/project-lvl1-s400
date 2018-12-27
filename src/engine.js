import readlineSync from 'readline-sync';

export default (value) => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  const isEven = num => num % 2;

  const boolAnswer = {
    yes: true,
    no: false,
  };

  const failAnswer = {
    yes: "'yes' is wrong answer ;(. Correct answer was 'no'.",
    no: "'no' is wrong answer ;(. Correct answer was 'yes'.",
  };

  const numSteps = 3;
  const getEven = () => {
    const conversation = (number, func) => {
      console.log('question: ', number);
      const answer = readlineSync.question('Your answer: ');
      if (boolAnswer[answer] === Boolean(!func(number))) {
        return 'Correct!';
      }
      return failAnswer[answer];
    };

    const iter = (count) => {
      if (count === 0) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
      const integer = value();
      const result = conversation(integer, isEven);
      console.log(result);
      if (result === 'Correct!') {
        iter(count - 1);
      }
    };
    return iter(numSteps);
  };
  getEven();
};
