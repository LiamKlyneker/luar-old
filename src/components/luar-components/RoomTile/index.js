import React from 'react';
import cx from 'classnames';

import { Currency } from 'luar-components';

const RoomTile = ({
  data: { img, address, price, currencyCode },
}) => {
  return (
    <a href="/other" className={cx('room-tile')}>
      <figure>
        <img src={img} alt="room/ie" />
      </figure>
      <footer>
        <p className={cx('room-tile__address')}>{address}</p>
        <Currency className={cx('room-tile__price')} value={price} currency={currencyCode} />
      </footer>
    </a>
  )
}

export default RoomTile;
