#!/usr/bin/env node
import { greeting } from '../utils';
import even from '../games/even';
import engine from '../game-engine';

engine(greeting, even);
