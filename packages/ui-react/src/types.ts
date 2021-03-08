import { Theme } from 'theme-ui';

// https://github.com/Microsoft/TypeScript/issues/30082
export type RecursivePartial<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]?: RecursivePartial<T[K]>;
    }
  : T;

// Can help merge partial themes together
export type PartialTheme = RecursivePartial<Theme>;

// https://github.com/system-ui/theme-ui/pull/692
export type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never;
};

export type ForwardRef<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;
