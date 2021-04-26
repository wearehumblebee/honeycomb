import { Theme } from 'theme-ui';

// https://github.com/Microsoft/TypeScript/issues/30082
export type RecursivePartial<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]?: RecursivePartial<T[K]>;
    }
  : T;

// Can help merge partial themes together
export type PartialTheme = RecursivePartial<Theme>;
