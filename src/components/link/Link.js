import classnames from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { Link as RouterLink } from 'react-router-dom';

import { styles } from './styles';

export class Link extends React.Component {
  render() {
    const { children, classes, className, href, variation } = this.props;

    return (
      <span>
        <RouterLink className={classnames(classes.root, classes[variation], className)} to={href}>
          {children}
        </RouterLink>
      </span>
    );
  }
}

export const LinkWithStyles = withStyles(styles)(Link);
