import { Routes, Route, Navigate } from 'react-router-dom';
import LoginConnect from '../pages/Login/LoginConnect';
import LoginStart from '../pages/Login/LoginStart';
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
			<Route path='/login/start' element={<LoginStart />} />
			<Route path='/login/connect' element={<LoginConnect />} />
		</Routes>
	);
};

export default PublicRoutes;
