import React from 'react';
import cx from 'classnames';

import { LuarLogo, IconButton } from 'luar-components';
import UserMenu from '#components/user-menu';

import styles from './styles.module.scss';

const MainHeader = () => {
  return (
    <header className={cx(styles.mainHeader)}>
      <div>
        <LuarLogo />
        <div className={cx(styles.mainHeader__options)}>
          <div className={cx(styles.options__inbox)}>
            <IconButton icon="inbox" class />
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
