import React from 'react';
import cx from 'classnames';

import { Avatar } from 'luar-components';
import DefaultAvatar from '/src/static/default-avatar.jpg';

import styles from './styles.module.scss';

const UserMenu = () => (
  <div className={cx(styles.userMenu)}>
    <Avatar src={DefaultAvatar} />
    <p>Liam Klyneker</p>
    <span />
  </div>
);

export default UserMenu;
