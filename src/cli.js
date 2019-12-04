#!/usr/bin/env node

const commander = require('commander');
commander.version('0.1~beta');

commander
  .option('-p --port <port>', 'Listen on PORT')
  .option('-t --type <type>', 'HTTP request type');

commander.parse(process.argv);
const logger = require('./logger');
logger(commander.port, commander.type);
