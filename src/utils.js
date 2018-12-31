// import readlineSync from 'readline-sync';

const randomInteger = (min = 1, max = 100) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

/*
export const askName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
*/
export default randomInteger;
