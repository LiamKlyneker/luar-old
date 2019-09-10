import React from 'react';

const Currency = ({ currency, value, className }) => {
	const currenciesSymbols = {
		USD: '$',
	};

	return (
		<p className={className}>
			{currenciesSymbols[currency]} {parseFloat(value).toFixed(2)}
		</p>
	);
};

export default Currency;
