#!/usr/bin/env node
import greeting from '..';

const isEven = (num) => num % 2 ? false : true;

const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);;
};

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
//const getEven = () => {
  
//  const txt = 
//  greeting();
//};