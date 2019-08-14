import React from 'react';

const Avatar = ({ src }) => {
	return (
		<figure className="avatar-profile">
			<img src={src} alt="avatar"/>
		</figure>	
	)
}

export default Avatar;
