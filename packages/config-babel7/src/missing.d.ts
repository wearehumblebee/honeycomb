/**
 * Custom declaration file for untyped babel-merge
 * @see https://www.npmjs.com/package/babel-merge
 */
declare module 'babel-merge' {
  // deepmerge is a dependency of babel-merge
  import { Options } from 'deepmerge';

  type BabelConfiguration = Record<string, unknown>;

  function babelMerge(
    source?: BabelConfiguration,
    overrides?: BabelConfiguration,
    deepmergeOpts?: Options,
  ): Record<string, unknown>;

  export default babelMerge;
}
