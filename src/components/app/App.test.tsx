import React from 'react';
import { render } from '@testing-library/react';
import { AppWithStyles } from './App';

test('renders learn react link', () => {
  const { getByText } = render(<AppWithStyles />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
