import { system } from '@theme-ui/presets'

export const theme = {
  ...system,

  buttons: {
    primary: {
      fontWeight: 'heading',
      cursor: 'pointer',
      color: 'background',
      bg: 'primary',

      '&:hover': {
        bg: 'secondary',
      }
    },

    secondary: {
      fontWeight: 'heading',
      cursor: 'pointer',
      color: 'background',
      bg: 'secondary',
    },
  },

  text: {
    default: {
      color: 'text',
      fontSize: 3,
    },

    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },

    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  }
} as const;