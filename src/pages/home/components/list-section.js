import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import ListSectionHeader from './list-section-header';
import RoomieTile from './roomie-tile';
import RoomTile from './room-tile';

import RoomiesList from '/src/static/roomies';
import RoomsList from '/src/static/rooms';

import styles from './styles.module.scss';

const ListSection = ({ type }) => {
  return (
    <>
      <div className="container">
        <ListSectionHeader />
      </div>
      <div className="container container--full">
        <section className={cx(styles.list)}>
          {type === 'roomies' &&
            RoomiesList.map(roomie => <RoomieTile key={roomie.id} data={roomie} />)}
          {type === 'rooms' &&
            RoomsList.map(room => <RoomTile key={room.id} data={room} />)}
        </section>
      </div>
    </>
  );
};

ListSection.propTypes = {
  type: string.isRequired,
};

export default ListSection;
