import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const PrivateRoutes: FC = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<p>market place nft</p>} />
			<Route path='/home' element={<p>PrivateRoutes</p>} />
		</Routes>
	);
};

export default PrivateRoutes;
