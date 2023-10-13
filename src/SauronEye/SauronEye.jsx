import React from 'react';

import FireEye from './FireEye';
import Lightning from './Lightning';
import Sight from './Sight';
import SightMask from './SightMask';

const SauronEye = () => {
	return (
		<group position={[0, 2.22, 0]} scale={0.25}>
			<FireEye />
			<Lightning />
			<Sight />
			<SightMask />
		</group>
	);
};

export default SauronEye;
