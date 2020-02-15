// import { ITheme } from '../../theme.config';

export const styles = theme => ({
  root: {
    appearance: 'none',
    border: '0',
    borderRadius: '3px',
    cursor: 'pointer',
    fontFamily: theme.fontFamilyMed,
    fontSize: theme.fontSize.text,
    margin: '0 0.5em',
    padding: '0.5rem 0.75rem',
    transitionDuration: '200ms',
    transitionProperty: 'color, background, border',
    transitionTimingFunction: 'ease-in',
    '&:disabled': {
      backgroundColor: theme.colors.lightest,
      border: `2px solid ${theme.colors.base}`,
      color: theme.colors.base,
      cursor: 'auto',
      '&:hover': {
        backgroundColor: theme.colors.lightest,
        border: `2px solid ${theme.colors.base}`,
        color: theme.colors.base,
      },
    },
  },
  primary: {
    backgroundColor: theme.colors.primary,
    border: `2px solid ${theme.colors.primary}`,
    color: theme.colors.white,
    '&:hover': {
      background: theme.colors.primaryDark,
      border: `2px solid ${theme.colors.primaryDark}`,
    },
  },
  text: {
    backgroundColor: 'transparent',
    color: theme.colors.primary,
    '&:hover': {
      color: theme.colors.primaryDark,
    },
  },
});
