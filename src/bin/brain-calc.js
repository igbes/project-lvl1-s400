#!/usr/bin/env node
import { greeting } from '../utils';
import calc from '../games/calc';
import engine from '../game-engine';

engine(greeting, calc);
