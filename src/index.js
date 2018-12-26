import readlineSync from 'readline-sync';

export default (text) => {
  const userName = readlineSync.question(text);
  console.log(`Hello, ${userName}!`);
};