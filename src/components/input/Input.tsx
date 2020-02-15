import classnames from 'classnames';
import * as React from 'react';
import withStyles from 'react-jss';

import { styles } from './styles';

// type InputProps = { inputType: string };

export const Input = props => {
  return (
    <input
      type={props.inputType}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={classnames(props.classes.root, props.className)}
    />
  );
};

export const InputWithStyles = withStyles(styles)(Input);
