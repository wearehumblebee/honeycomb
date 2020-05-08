// Stick to JS while theme-ui is being rewritten to TypeScript
// https://github.com/system-ui/theme-ui/issues/668
import { Theme } from 'theme-ui';

export interface ThemeDefinition {
  name: string;
  default: boolean;
  theme: Theme;
  color?: string;
  emoji?: string;
}

export const themes: ThemeDefinition[];
