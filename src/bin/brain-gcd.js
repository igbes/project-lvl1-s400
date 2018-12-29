#!/usr/bin/env node
import { askName } from '../utils';
import { greeting, gcd } from '../games/gcd';
import engine from '../game-engine';

engine(greeting, askName, gcd);
