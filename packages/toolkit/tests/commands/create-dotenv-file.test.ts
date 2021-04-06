import fs from 'fs';
import path from 'path';

import createDotEnvFile from 'src/commands/createDotEnvFile';

describe('commands > createDotenvFile', () => {
  const spies: jest.SpyInstance[] = [];
  const directory = process.cwd();
  const example = 'tests/files/.env.example';

  beforeEach(() => {
    spies.push(jest.spyOn(console, 'info').mockImplementation());
  });

  afterEach(() => {
    spies.forEach((spy) => spy.mockRestore());
  });

  it('creates a local file if target is missing', () => {
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

  it('does not throw if the file already exists', () => {
    const target = 'tests/files/.env.existing';

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
