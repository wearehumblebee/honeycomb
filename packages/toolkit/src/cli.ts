// https://github.com/yargs/yargs/blob/master/docs/advanced.md#commands
'use strict';

import { CommandModule } from 'yargs';

import createDotenvFile from './commands/create-dotenv-file';

export interface CreateDotenvArguments {
  example: string;
  target: string;
}

const command: CommandModule<Record<string, never>, CreateDotenvArguments> = {
  command: 'create-dotenv-file',
  describe: 'Create a local .env file if missing, based on an example',
  builder: {
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
  },
  handler: (args) => {
    createDotenvFile({
      directory: process.cwd(),
      exampleFilePath: args.example,
      targetFilePath: args.target,
    });
  },
};

export default command;
