// theme-ui is being rewritten to TypeScript:
// https://github.com/system-ui/theme-ui/issues/668
// in v0.4.0-alpha.0, some packages are already converted and provide types
// some are not, but provided by the community in https://github.com/DefinitelyTyped/DefinitelyTyped
// and some are missing.
// Here we will declare those missing in order to pass the TypeChecking.
// Once types for those are available, those declarations should be removed.

// no open PR yet
declare module '@theme-ui/color-modes';

// https://github.com/system-ui/theme-ui/pull/703
declare module '@theme-ui/mdx';

// https://github.com/system-ui/theme-ui/pull/708
declare module '@theme-ui/theme-provider';
