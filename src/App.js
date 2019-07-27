import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from '#pages/home';

import './scss/default.scss';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
