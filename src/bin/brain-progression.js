#!/usr/bin/env node
import { askName } from '../utils';
import { greeting, progression } from '../games/progression';
import engine from '../game-engine';

engine(greeting, askName, progression);
