
import randomInteger from '../utils';
import engine from '../game-engine';

const isEven = num => num % 2 === 0;

const task = 'Answer "yes" if number even otherwise answer "no".';

const even = () => {
  const yesOrNo = n => (isEven(n) ? 'yes' : 'no');
  const question = randomInteger();
  const rightAnswer = yesOrNo(question);
  return [rightAnswer, question];
};

export default() => engine(task, even);
