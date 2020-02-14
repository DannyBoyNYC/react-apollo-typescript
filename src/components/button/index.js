import * as React from 'react';

import { ButtonWithStyles } from './Button';

/**
 * Button Variations.
 */
const ButtonText = props => <ButtonWithStyles {...props} variation="text" />;
const ButtonPrimary = props => <ButtonWithStyles {...props} variation="primary" />;
export { ButtonText, ButtonPrimary };
