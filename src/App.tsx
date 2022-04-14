import { BrowserRouter } from 'react-router-dom';
import { FC } from 'react';
import PrivateRoutes from './Routes/Private.routes';
import PublicRoutes from './Routes/Public.routes';
import './index.css';

const App: FC = (): JSX.Element => {
	const auth = false;
	return (
		<div className='nft'>
			<BrowserRouter>
				{auth ? <PrivateRoutes /> : <PublicRoutes />}
			</BrowserRouter>
		</div>
	);
};

export default App;
