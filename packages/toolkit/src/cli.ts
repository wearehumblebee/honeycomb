'use strict';

import yargs from 'yargs';

import createDotenvFile from './commands/create-dotenv-file';

export interface CreateDotenvArguments {
  example: string;
  target: string;
}

const cli = yargs
  .scriptName('humblebee-toolkit')
  .usage('$0 <cmd> [args]')
  .command(
    'create-dotenv-file',
    'Create a local .env file if missing, based on an example',
    (yargs) => {
      yargs.options({
        example: {
          alias: 'e',
          demandOption: true,
          describe: 'The example file to use.',
          type: 'string',
        },
        target: {
          alias: 't',
          demandOption: false,
          describe: 'The target file to create (defaults to ".env")',
          default: '.env',
          type: 'string',
        },
      });
    },
    (args: CreateDotenvArguments) => {
      createDotenvFile({
        directory: process.cwd(),
        exampleFilePath: args.example,
        targetFilePath: args.target,
      });
    },
  )
  .help().argv;

export default cli;
