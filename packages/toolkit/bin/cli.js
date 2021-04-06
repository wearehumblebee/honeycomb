#!/usr/bin/env node

'use strict';

const yargs = require('yargs/yargs');
const { createDotEnvFileCommand } = require('../dist/cli');

yargs(process.argv.slice(2))
  // register commands
  .command(createDotEnvFileCommand)
  .help().argv;
