import { ITheme } from '../../theme.config';

export const styles = theme => ({
  root: {
    cursor: 'pointer',
    display: 'block',
    textDecoration: 'none',
    '&.inline': {
      display: 'inline-block',
    },
  },
});