import { Navigate, useParams } from 'react-router-dom';

import StepOnBoarding from '../../components/StepOnBoarding/StepOnBoarding';

import imgMarketPlace from '../../assets/images/image3.png';
import imgStart from '../../assets/images/image5.png';
import ImgDiscovering from '../../assets/images/image8.png';

const OnBoarding = (): JSX.Element => {
	const { step } = useParams();
	if (step === 'marketplace') {
		return (
			<StepOnBoarding
				title='Discover largest NFT marketplace'
				image={imgMarketPlace}
				step={1}
				next='start'
			/>
		);
	}
	if (step === 'start') {
		return (
			<StepOnBoarding
				title='Start your own NFT gallery now'
				image={imgStart}
				step={2}
				next='discovering'
			/>
		);
	}
	if (step === 'discovering') {
		return (
			<StepOnBoarding
				title='discovering the world of crypto art'
				image={ImgDiscovering}
				step={3}
			/>
		);
	}
	return <Navigate to='/login/start' replace />;
};
export default OnBoarding;
