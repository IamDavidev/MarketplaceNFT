import { Link } from 'react-router-dom';
import { PropsStep } from '../../types/Types';
import styles from './step.module.scss';

const StepOnBoarding = ({ title, image, step, next }: PropsStep) => {
	console.log(step, next);
	return (
		<div className={styles.stepContain}>
			<header className={styles.headerStep}>
				<picture>
					<img src={image} alt={title} loading='lazy' />
				</picture>
			</header>
			<footer className={styles.footerStep}>
				<div className={styles.containFooterStep}>
					<p className={styles.titleFooterStep}>{title}</p>
					<span className={styles.spanFooterStep}>
						Buy and sell digital items
					</span>
					<div className={styles.stepFooterStep}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<Link to={`/onboarding/${next}`} className={styles.btnNextStep}>
					{next}
				</Link>
			</footer>
		</div>
	);
};
export default StepOnBoarding;
