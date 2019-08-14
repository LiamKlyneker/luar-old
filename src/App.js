import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainHeader from '#components/header';
import HomePage from '#pages/home';

import './scss/default.scss';

function App() {
  return (
    <>
    	<MainHeader />
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </>
  );
}

export default App;
