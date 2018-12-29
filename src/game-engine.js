
const numSteps = 3;

const engine = (greeting, askName, calc) => {
  greeting();
  const userName = askName();
  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [rightAnswer, answer] = calc();
    if (answer === rightAnswer) {
      console.log('Correct!');
      iter(count - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    }
  };
  return iter(numSteps);
};
export default engine;
