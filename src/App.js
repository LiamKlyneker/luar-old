import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainHeader from '#components/header';
import HomePage from '#pages/Home';
import RoomieDetailPage from '#pages/RoomieDetail';

import './scss/default.scss';

function App() {
  return (
    <>
      <MainHeader />
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/roomie/:slug" component={RoomieDetailPage} />
      </Router>
    </>
  );
}

export default App;
