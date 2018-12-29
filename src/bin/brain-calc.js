#!/usr/bin/env node
import { askName } from '../utils';
import { greeting, calc } from '../games/calc';
import engine from '../game-engine';

engine(greeting, askName, calc);
