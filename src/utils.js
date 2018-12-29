import readlineSync from 'readline-sync';

export const randomInteger = (min = 1, max = 100) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};


export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
