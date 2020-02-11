import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainHeader from '#components/header';
import HomePage from '#pages/Home';
import RoomieDetailPage from '#pages/RoomieDetail';
import RoomDetailPage from '#pages/RoomDetail';

import './scss/default.scss';

function App() {
  return (
    <>
      <MainHeader />
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/roomie/:slug" component={RoomieDetailPage} />
        <Route path="/room/:slug" component={RoomDetailPage} />
      </Router>
    </>
  );
}

export default App;
