import React from 'react';

import HeaderMobile from './components/header-mobile';
import GallerySection from './components/gallery-section';
import ActionSection from './components/action-section';
import AboutRoomSection from './components/about-room-section';
import AboutPropertySection from './components/about-property-section';

const RoomDetailPage = () => {
  return (
    <main className="container container--full container--room-roomie-detail">
      <div>
        <HeaderMobile />
        <GallerySection />
      </div>
      <div>
        <ActionSection />
        <AboutRoomSection />
        <AboutPropertySection />
      </div>
    </main>
  );
};

export default RoomDetailPage;
