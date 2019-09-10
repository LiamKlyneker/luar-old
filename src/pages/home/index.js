import React, { useState } from 'react';

import { Tabs } from 'luar-components';
import ListSection from '#pages/home/sections/list-section';

const HomePage = () => {
	/* States */
	const [tabValue, setTabValue] = useState('roomies');

	const tabs = [{ value: 'roomies', name: 'Roomies' }, { value: 'rooms', name: 'Rooms' }];

	return (
		<main>
			<div className="container">
				<Tabs tabs={tabs} active={tabValue} onChange={value => setTabValue(value)} />
			</div>
			{tabs.map(
				tab =>
					tab.value === tabValue && (
						<div key={tab.value}>
							<ListSection type={tab.value} />
						</div>
					)
			)}
		</main>
	);
};

export default HomePage;
