#!/usr/bin/env node
import { askName } from '../utils';
import { greeting, even } from '../games/even';
import engine from '../game-engine';

engine(greeting, askName, even);
