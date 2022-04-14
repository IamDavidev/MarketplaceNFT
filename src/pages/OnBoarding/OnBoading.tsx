import { useParams } from 'react-router-dom';
import StepOnBoarding from '../../components/StepOnBoarding/StepOnBoarding';
import imgMarketPlace from '../../assets/images/image3.png';
const OnBoarding = (): JSX.Element => {
	const { step } = useParams();
	if (step === 'marketplace') {
		return (
			<StepOnBoarding
				title='Discover largest NFT marketplace'
				image={imgMarketPlace}
				step={1}
				next='create-marketplace'
			/>
		);
	}
	return <>na hay informacion</>;
};
export default OnBoarding;
