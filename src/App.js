import Card from './Components/Card';

export default function App() {
	return (
		<div className='app-container'>
			<Card
				heading={'sedans'}
				content={
					'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				}
				bgColor={'#e38826'}
			/>
		</div>
	);
}
