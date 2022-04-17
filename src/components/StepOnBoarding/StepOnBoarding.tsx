import { Link } from 'react-router-dom';
import { PropsStep } from '../../types/Types';
import styles from './step.module.scss';

const StepOnBoarding = ({ title, image, step, next }: PropsStep) => {
	console.log(step, next);
	return (
		<div className={styles.step}>
			<div className={styles.stepContain}>
				<div className={styles.pictureHeaderStep}>
					<img
						src={image}
						alt={title}
						loading='lazy'
						className={styles.ImagePictureHeader}
					/>
				</div>

				<footer className={styles.footerStep}>
					<div className={styles.containFooterStep}>
						<p className={styles.titleFooterStep}>{title}</p>
						<span className={styles.spanFooterStep}>
							Buy and sell digital items
						</span>
						<div className={styles.stepFooterStep}>
							<span className={step === 1 ? styles.stepActive : ''}></span>
							<span className={step === 2 ? styles.stepActive : ''}></span>
							<span className={step === 3 ? styles.stepActive : ''}></span>
						</div>
					</div>

					<Link to={`/onboarding/${next}`} className={styles.btnNextStep}>
						Next
					</Link>
				</footer>
			</div>
		</div>
	);
};
export default StepOnBoarding;
