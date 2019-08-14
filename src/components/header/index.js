import React from 'react';
import { LuarLogo, IconButton } from 'luar-components';
import UserMenu from '#components/user-menu'

const MainHeader = () => {
	return (
		<header>
			<div>
				<LuarLogo />
				
				<IconButton icon="inbox" />
				<UserMenu />
			</div>
		</header>
	);
};

export default MainHeader;
