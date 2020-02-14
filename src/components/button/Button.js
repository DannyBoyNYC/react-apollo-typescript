import classnames from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import { styles } from './styles';

export const Button = ({ children, classes, className, isDisabled, onClick, variation }) => (
  <button
    className={classnames(classes.root, classes[variation], className)}
    onClick={onClick}
    disabled={isDisabled}
    type="button"
  >
    {children}
  </button>
);

export const ButtonWithStyles = withStyles(styles)(Button);
