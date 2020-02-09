import React from 'react';
import cx from 'classnames';

import { Button, Icon } from 'luar-components';
import styles from './styles.module.scss';

const ListSectionHeader = () => {
  return (
    <div className={cx(styles.options)}>
      <Button type="secondary">
        <Icon icon="map" /> MAP MODE
      </Button>
      <Button type="secondary">
        <Icon icon="filter_list" /> PREFERENCES
      </Button>
    </div>
  );
};

export default ListSectionHeader;
