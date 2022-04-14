import { Routes, Route, Navigate } from 'react-router-dom';
import OnBoarding from '../pages/OnBoarding/OnBoading';

const PublicRoutes = () => {
	console.log('public routes');
	return (
		<Routes>
			<Route path='/onboarding/:step' element={<OnBoarding />} />
			<Route
				path='*'
				element={<Navigate to='/onboarding/marketplace' replace />}
			/>
		</Routes>
	);
};

export default PublicRoutes;
