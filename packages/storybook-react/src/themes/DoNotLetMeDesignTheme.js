import { merge } from 'theme-ui';
import { base as preset } from '@theme-ui/presets';

// THIS IS WHY YOU SHOULD NOT LET ME DESIGN :-|
// names from https://coolors.co/38b9ab-426c85-fffffa-393e41-f55d3e
const LIGHT_SEA_GREEN = 'rgb(56, 185, 171)';
const BLUE_SAPPHIRE = 'rgb(66, 108, 133)';
const BABY_POWDER = 'rgb(255, 255, 250)';
const ONYX = 'rgb(57, 62, 65)';
const ORANGE_SODA = 'rgb(245, 93, 62)';

const BATTLESHIP_GREY = 'rgb(135, 139, 141)';

const COLOR_VARIANTS = {
  primary: {
    backgroundColor: 'primary',
    color: 'black',
  },
  secondary: {
    backgroundColor: 'secondary',
    color: 'white',
  },
  accent: {
    backgroundColor: 'accent',
    color: 'black',
  },
  muted: {
    backgroundColor: 'muted',
    color: 'black',
  },
  black: {
    backgroundColor: 'text',
    color: 'white',
  },
  white: {
    backgroundColor: 'white',
    color: 'text',
  },
  light: {
    backgroundColor: 'light',
    color: 'black',
  },
};

/**
 * Theme UI
 *
 * @see https://theme-ui.com/theming
 * @see https://theme-ui.com/theme-spec
 *
 * @var object
 */
const CustomTheme = merge(preset, {
  // tokens
  colors: {
    text: ONYX,
    background: BLUE_SAPPHIRE,
    primary: LIGHT_SEA_GREEN,
    secondary: BLUE_SAPPHIRE,
    accent: ORANGE_SODA,
    highlight: ORANGE_SODA,
    muted: BATTLESHIP_GREY,
    light: BABY_POWDER,
  },
  fontSizes: [18, 24, 32, 48, 64, 96, 148],
  text: {
    heading: {
      textTransform: 'uppercase',
    },
    paragraph: {
      fontSize: 0,
    },
  },
  // components
  alerts: {
    ...COLOR_VARIANTS,
  },
  badges: {
    ...COLOR_VARIANTS,
  },
  buttons: {
    ...COLOR_VARIANTS,
  },
  messages: {
    ...COLOR_VARIANTS,
  },
  cards: {
    ...COLOR_VARIANTS,
  },
});

export default CustomTheme;
