import React from 'react';
import { func } from 'prop-types';
import cx from 'classnames';

const Tabs = ({ tabs, active, onChange }) => {
  return (
    <div className={cx('tabs')}>
      { tabs.map(tab => (
        <button
          key={tab.value}
          className={cx({ active: tab.value === active })}
          onClick={() => onChange(tab.value)}
        >{tab.name}</button>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  onChange: func.isRequired,
};

export default Tabs;
