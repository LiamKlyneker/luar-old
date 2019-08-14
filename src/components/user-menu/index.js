import React from 'react';
import { Avatar } from 'luar-components';
import DefaultAvatar from '/src/static/default-avatar.jpg';

const UserMenu = () => (
	<div>
		<Avatar src={DefaultAvatar} />
		<p>Liam Klyneker</p>
	</div>
);

export default UserMenu;
