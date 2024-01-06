import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {}

const Footer = (props: IProps) => {
	const {} = props;

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.quick_links}>
						<h3>Quick Links</h3>
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
						<h3>Connect with us</h3>
						<div className={styles.row}>
							<Link href={''} className={`${styles.link} `}>
								<Image src={''} width={25} height={25} alt='' />
							</Link>
							<Link href={''} className={`${styles.link} `}>
								<Image src={''} width={25} height={25} alt='' />
							</Link>
							<Link href={''} className={`${styles.link} `}>
								<Image src={''} width={25} height={25} alt='' />
							</Link>
						</div>
					</div>
				</div>

				<div className={styles.row}>
					<Image src={''} width={25} height={25} alt='' />
					<Image src={''} width={25} height={25} alt='' />
					<Image src={''} width={25} height={25} alt='' />
				</div>

				<p className={styles.copyrighta}> 2023 All right reserved C Winrack Project</p>
			</div>
		</footer>
	);
};

export default Footer;
