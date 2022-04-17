import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';
import iconConnect from '../../assets/icons/>.svg';
import logoEnefte from '../../assets/images/enefte.svg';

const LoginStart: FC = (): JSX.Element => {
	return (
		<div className={styles.loginStart}>
			<header className={styles.headerLoginStart}>
				<div>
					<img src={logoEnefte} alt='logo' />
					<span>enefte</span>
				</div>
			</header>
			<section className={styles.mainLoginStart}>
				<div
					className='
				'>
					<h1 className={styles.titleMainLogin}>
						All NFTs are certifiably unique and ownable.
					</h1>
					<p className={styles.textMainLogin}>
						A credible and excellent marketplace for non-fungible tokens.
					</p>
				</div>
				<footer className={styles.footerMainLogin}>
					<Link to='/login/connect' className={styles.linkConnect}>
						Connect With Walllet
					</Link>
					<span>
						<Link to='/login/connect'>
							<img src={iconConnect} alt='connect' />
						</Link>
					</span>
				</footer>
			</section>
		</div>
	);
};

export default LoginStart;
