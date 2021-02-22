#!/usr/bin/env node

'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('../dist/cli')().parse(process.argv.slice(2));
