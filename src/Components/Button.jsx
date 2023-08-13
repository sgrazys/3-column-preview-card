import { useState } from 'react';

function Button({ color }) {
	const [isHover, setIsHover] = useState(false);

	const btnStyle = {
		fontFamily: 'inherit',
		fontSize: 'inherit',
		textDecoration: 'none',
		backgroundColor: isHover ? 'transparent' : '#fff',
		padding: '1.5rem 3rem',
		border: '2px solid #fff',
		borderRadius: '100px',
		cursor: 'pointer',
		color: isHover ? '#fff' : color,
	};

	return (
		<button
			style={btnStyle}
			onMouseEnter={() => setIsHover(!isHover)}
			onMouseLeave={() => setIsHover(false)}
		>
			Learn More
		</button>
	);
}

export default Button;
