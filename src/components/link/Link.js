import classnames from 'classnames';
import * as React from 'react';
import withStyles from 'react-jss';
import { Link as RouterLink } from 'react-router-dom';

import { styles } from './styles';

const Link = props => {
  const { children, classes, className, href, variation } = props;

  return (
    <span>
      <RouterLink className={classnames(classes.root, classes[variation], className)} to={href}>
        {children}
      </RouterLink>
    </span>
  );
};

export const LinkWithStyles = withStyles(styles)(Link);
