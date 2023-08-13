import Button from './Button';

import './Card.css';

function Card({ heading, content, bgColor, children }) {
	return (
		<div
			className='card'
			style={{ backgroundColor: bgColor }}
		>
			{children}
			<h1 className='heading'>{heading}</h1>
			<p className='content'>{content}</p>
			<Button color={bgColor} />
		</div>
	);
}

export default Card;
