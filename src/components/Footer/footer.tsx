import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-brands-svg-icons';

interface IProps {}

const Footer = (props: IProps) => {
	const {} = props;

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.quick_links}>
						<h3 className={styles.header3}>Quick Links</h3>
						<Link href={'/'} className={`${styles.link} `}>
							Home
						</Link>
						<Link href={'/results'} className={`${styles.link} `}>
							Results
						</Link>
						<Link href={'/resources'} className={`${styles.link} `}>
							Resources
						</Link>
						<Link href={'/team'} className={`${styles.link} `}>
							Meet the team
						</Link>
					</div>
					<div className={styles.social_media_links}>
						<h3 className={styles.header3}>Connect with us</h3>
						<div className={styles.row}>
							<Link href={''} className={`${styles.link} `}>
								<Image src={'/logos/insta_white_logo.svg'} width={25} height={25} alt='' />
							</Link>
							<Link href={''} className={`${styles.link} `}>
								<Image src={'/logos/twitter_x_white_logo.svg'} width={25} height={25} alt='' />
							</Link>
							<Link href={''} className={`${styles.link} `}>
								<Image src={'/logos/linkedin_white_logo.svg'} width={25} height={25} alt='' />
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.row}>
					<Image src={'/logos/cuk_logo.svg'} width={146} height={117} alt='' />
					<Image src={'/logos/ufv_logo.svg'} width={223} height={100} alt='' />
					<Image src={'/logos/sdoc_logo.svg'} width={90} height={86} alt='' />
				</div>
				<div className={styles.container}>
					<hr className={styles.hr_line}/>
					<p className={styles.copyright}>2023 All right reserved	C Winrack Project</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
