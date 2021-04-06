import fs from 'fs';
import path from 'path';

import createDotEnvFile from 'src/commands/createDotEnvFile';

describe('commands > createDotenvFile', () => {
  const spies: jest.SpyInstance[] = [];

  beforeEach(() => {
    spies.push(jest.spyOn(console, 'info').mockImplementation());
  });

  afterEach(() => {
    spies.forEach((spy) => spy.mockRestore());
  });

  it('creates a local file if target is missing', () => {
    const directory = process.cwd();
    const example = 'tests/files/.env.example';
    const target = 'tests/files/.env';

    jest.spyOn(fs, 'copyFileSync');

    expect(() => {
      createDotEnvFile({
        directory,
        exampleFilePath: example,
        targetFilePath: target,
      });
    }).not.toThrow();

    expect(fs.copyFileSync).toHaveBeenCalledWith(
      path.resolve(directory, example),
      path.resolve(directory, target),
      fs.constants.COPYFILE_EXCL,
    );
  });
});
