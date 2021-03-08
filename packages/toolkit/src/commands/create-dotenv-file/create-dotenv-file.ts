import fs from 'fs';
import path from 'path';

export interface CreateDotenvArguments {
  directory: string;
  exampleFilePath: string;
  targetFilePath: string;
}

const createDotenvFile = ({
  directory,
  exampleFilePath,
  targetFilePath,
}: CreateDotenvArguments): void => {
  const resolvedExampleFilePath = path.resolve(directory, exampleFilePath);
  const resolvedTargetFilePath = path.resolve(directory, targetFilePath);

  try {
    fs.copyFileSync(resolvedExampleFilePath, resolvedTargetFilePath, fs.constants.COPYFILE_EXCL);
    console.info(
      `🙌 A local "${targetFilePath}" file has been created from the provided example "${exampleFilePath}"`,
    );
  } catch (error) {
    // The purpose of this function is to create a file if the target does not exist.
    // If the target file already exists, we just ignore this function and resolve silently.
    if (error.code !== 'EEXIST') {
      console.warn(
        `⚠️ [WARN] Unable to create local file "${targetFilePath}" based on example "${exampleFilePath}".`,
      );
      console.error(error);
    }
  }
};

export default createDotenvFile;
