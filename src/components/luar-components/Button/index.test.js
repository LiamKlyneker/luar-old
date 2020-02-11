import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './index';

afterEach(cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

test('renders button correctly', () => {
  const { getByTestId } = render(<Button>Click Me</Button>);
  expect(getByTestId('Button')).toHaveTextContent('Click Me');
});
