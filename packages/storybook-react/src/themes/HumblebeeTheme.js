import { merge } from 'theme-ui';
import { base as preset } from '@theme-ui/presets';

// names from https://coolors.co/000000-161616-a6a6a4-fff700-ffffff
const BLACK = 'rgb(0, 0, 0)';
const WHITE = 'rgb(255, 255, 255)';
const EERIE_BLACK = 'rgb(22, 22, 22)';
const QUICK_SILVER = 'rgb(166, 166, 164)';
const LEMON = 'rgb(255, 247, 60)';

/**
 * Theme UI
 *
 * @see https://theme-ui.com/theming
 * @see https://theme-ui.com/theme-spec
 *
 * @var object
 */
const HumblebeeTheme = merge(preset, {
  breakpoints: [
    // mobile-first
    '40em', // tablet portrait
    '56em', // tablet landscape
    '64em', // desktop
    '90em', // wide screens
  ],
  colors: {
    text: WHITE,
    background: BLACK,
    primary: WHITE,
    secondary: EERIE_BLACK,
    accent: LEMON,
    highlight: EERIE_BLACK,
    muted: QUICK_SILVER,
  },
  text: {
    heading: {
      py: 2,
    },
    paragraph: {
      variant: 'text.body',
      color: 'primary',
      fontSize: 3,
    },
  },
  layout: {
    container: {
      px: [3, 4, null, 6],
    },
  },
  sizes: {
    container: 1360,
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
      color: 'black',
    },
    muted: {
      backgroundColor: 'muted',
      color: 'black',
    },
    cta: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid white',
    },
  },
  forms: {
    checkbox: {
      color: 'text',
      borderColor: 'text',
      '&:checked + label': {
        color: 'text',
      },
    },
    input: {
      color: 'text',
      borderColor: 'text',
    },
    radio: {
      color: 'text',
      borderColor: 'text',
    },
    textarea: {
      color: 'text',
      borderColor: 'text',
    },
  },
});

export default HumblebeeTheme;
