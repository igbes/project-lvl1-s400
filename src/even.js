#!/usr/bin/env node
import engine from './engine';

export default () => {
  const randomInteger = () => {
    const min = 1;
    const max = 100;
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  engine(randomInteger);
};
