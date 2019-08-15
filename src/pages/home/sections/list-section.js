import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import { Button, Icon, RoomieTile, RoomTile } from 'luar-components';

import RoomiesList from '/src/static/roomies';
import RoomsList from '/src/static/rooms'

import styles from './styles.module.scss';

const ListSection = ({ type }) => {
  return (
    <>
      <div className="container">
        <div className={cx(styles.options)}>
        <Button type="secondary">
            <Icon icon="map" /> MAP MODE
          </Button>
          <Button type="secondary">
            <Icon icon="filter_list" /> PREFERENCES
          </Button>
        </div>
      </div>
      <div className="container container--full">
        <section className={cx(styles.list)}>
          {type === 'roomies' && RoomiesList.map(roomie => (
            <RoomieTile data={roomie} />
          ))}
          {type === 'rooms' && RoomsList.map(room => (
            <RoomTile data={room} />
          ))}
        </section>
      </div>
    </>
  );
};

ListSection.propTypes = {
  type: string.isRequired,
};

export default ListSection;
