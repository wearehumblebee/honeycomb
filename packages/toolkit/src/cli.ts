// https://github.com/yargs/yargs/blob/master/docs/advanced.md#commands
'use strict';

import { CommandModule } from 'yargs';

import createDotEnvFile from './commands/createDotEnvFile';

export interface CreateDotEnvFileArguments {
  example: string;
  target: string;
}

export const createDotEnvFileCommand: CommandModule<
  Record<string, never>,
  CreateDotEnvFileArguments
> = {
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
    createDotEnvFile({
      directory: process.cwd(),
      exampleFilePath: args.example,
      targetFilePath: args.target,
    });
  },
};
