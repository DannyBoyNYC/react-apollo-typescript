import { ITheme } from '../../theme.config';

export const styles = (theme: ITheme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1rem 0',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: theme.colors.primaryDark
  },
}) 
