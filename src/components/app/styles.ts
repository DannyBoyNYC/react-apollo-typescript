import { ITheme } from '../../theme.config';

export const styles = (theme: ITheme) => ({

  body: {
    margin: '0',
  },
  input: {
    maxWidth: '500px'
  },
  gray: {
    color: '#828282'
  }, orange: {
    backgroundColor: '#ff6600'
  },
  backgroundGray: {
    backgroundColor: 'rgb(246,246,239)'
  },
  f11: {
    fontSize: '11px'
  },
  w85: {
    width: '85%'
  },  
  button: {
    fontFamily: 'monospace',
    fontSize: '10pt',
    color: 'black',
    backgroundColor: 'buttonface',
    // textAlign: 'center',
    padding: '2px 6px 3px',
    borderWidth: '2px',
    borderStyle: 'outset',
    borderColor: 'buttonface',
    cursor: 'pointer',
    maxWidth: '250px',
  }
})