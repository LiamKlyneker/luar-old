import React from 'react';

import HeaderMobile from './components/header-mobile';
import GallerySection from './components/gallery-section';
import ActionSection from './components/action-section';
import MainInfoSection from './components/main-info-section';

const RoomieDetailPage = () => {
  return (
    <main className="container container--full container--room-roomie-detail">
      <div>
        <HeaderMobile />
        <GallerySection />
      </div>
      <div>
        <ActionSection />
        <MainInfoSection />
      </div>
    </main>
  );
};

export default RoomieDetailPage;
