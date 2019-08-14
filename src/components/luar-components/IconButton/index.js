import React from 'react';
import cx from 'classnames';

const IconButton = ({ icon }) => (
	<button>
		<i className={
			cx('material-icons', 'iconButton')
		}>
			{icon}
		</i>
	</button>
);

export default IconButton;
