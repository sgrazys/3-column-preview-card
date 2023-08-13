import { IconSedan, IconSuv, IconLuxury } from './icons/vehicles';
import Card from './Components/Card';
import Footer from './Components/Footer';

export default function App() {
	return (
		<>
			<div className='app-container'>
				<Card
					heading={'sedans'}
					content={
						'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
					}
					bgColor={'#e38826'}
				>
					<IconSedan />
				</Card>
				<Card
					heading={'suvs'}
					content={
						'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
					}
					bgColor={'#006970'}
				>
					<IconSuv />
				</Card>
				<Card
					heading={'luxury'}
					content={
						'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
					}
					bgColor={'#004241'}
				>
					<IconLuxury />
				</Card>
			</div>
			<Footer />
		</>
	);
}
