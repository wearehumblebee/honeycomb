import { merge, Theme } from 'theme-ui';
import { base as preset } from '@theme-ui/presets';

// names from https://coolors.co/000000-161616-a6a6a4-fff700-ffffff
const BLACK = 'rgb(0, 0, 0)';
const WHITE = 'rgb(255, 255, 255)';
const EERIE_BLACK = 'rgb(22, 22, 22)';
const QUICK_SILVER = 'rgb(166, 166, 164)';
const LEMON = 'rgb(255, 247, 60)';

const DISABLED_STATE = {
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.65,
  },
};

const DefaultTheme: Theme = merge(
  preset as Theme,
  {
    // tokens
    colors: {
      background: BLACK,
      text: WHITE,
      primary: LEMON,
      secondary: EERIE_BLACK,
      muted: QUICK_SILVER,
    },
    sizes: {
      container: 1360,
    },
    // components
    alerts: {
      primary: {
        color: 'background',
      },
    },
    buttons: {
      primary: {
        color: 'background',
        ...DISABLED_STATE,
      },
      muted: {
        backgroundColor: 'muted',
        color: 'background',
        ...DISABLED_STATE,
      },
    },
  } as Partial<Theme>,
);

export default DefaultTheme;
