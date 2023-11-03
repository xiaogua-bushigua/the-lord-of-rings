import { Html, useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

const Loading = () => {
	const { progress } = useProgress();
	const [padding, setPadding] = useState(window.innerWidth);

	useEffect(() => {
		setPadding((1 - progress / 100) * window.innerWidth);
	}, [progress]);
	return (
		<Html>
			<div
				style={{
					width: '100vw',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					backgroundColor: '#333333',
					fontSize: '38px',
					color: '#b62b2b',
					fontWeight: '600',
				}}
			>
				<span>{progress}</span>
				<div
					style={{
						height: '10px',
						width: '100vw',
						marginTop: '12px',
						backgroundColor: '#b62b2b',
						marginRight: padding + 'px',
					}}
				></div>
			</div>
			;
		</Html>
	);
};

export default Loading;
