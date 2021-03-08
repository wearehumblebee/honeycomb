#!/usr/bin/env node

'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('yargs/yargs')(process.argv.slice(2)).command(require('../dist/cli')).help().argv;
