import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HomePage from '../index';

afterEach(cleanup);

test('renders Home Page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage />, div);
});
