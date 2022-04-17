import { FC } from 'react';

import styles from './login.module.scss';
import imgConnect from '../../assets/images/image10.png';
import ImgLogo from '../../assets/images/enefte.svg';
import iconBack from '../../assets/icons/>.svg';
import metaMask from '../../assets/icons/metaMask.svg';
import gmail from '../../assets/icons/gmail.svg';
import github from '../../assets/icons/github.svg';
import { Link } from 'react-router-dom';

const LoginConnect: FC = (): JSX.Element => {
	return (
		<div className={styles.loginConnect}>
			<header className={styles.headerLoginConnect}>
				<Link to='/login/start' className={styles.linkBack}>
					<img src={iconBack} alt='back' className={styles.btnBackHeader} />
				</Link>
				<div className={styles.titleHeaderConnect}>
					<img src={ImgLogo} alt='ennefte' className={styles.logoTitleHeader} />
					<span>enefte</span>
				</div>
			</header>

			<div className={styles.mainLoginConnect}>
				<header className={styles.headerMainConnect}>
					<div>
						<img src={imgConnect} alt='choseWallet' />
					</div>
					<h1 className={styles.titleHeaderMain}>Choose your wallet</h1>
					<p className={styles.textHeaderMain}>
						by connection your wallet you agree to our
						<span> Term of Service</span>
						{' and '}
						<span>Privacy Policy</span>
					</p>
				</header>

				<footer className={styles.footerMainConnect}>
					<div className={styles.cardFooterConnect}>
						<img
							src={metaMask}
							alt='metamask'
							className={styles.imgCardConnect}
						/>
						MetaMask
					</div>
					<div className={styles.cardFooterConnect}>
						<img src={github} alt='github' className={styles.imgCardConnect} />
						github
					</div>
					<div className={styles.cardFooterConnect}>
						<img
							src={gmail}
							alt='email adn password'
							className={styles.imgCardConnect}
						/>
						email and password
					</div>
				</footer>
			</div>

			<footer className={styles.footerLoginConnect}>
				<button className={styles.btnLoginConnect}>
					<span>Continue</span>
				</button>
			</footer>
		</div>
	);
};

export default LoginConnect;
