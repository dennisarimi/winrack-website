import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

interface IProps {
	socialMedia: {
		instagram: string;
        twitter: string;
        linkedin: string;
    };
	collaboratorLinks: {
		cuk: string;
		ufv: string;
		sdoc: string;
	}
}

const Footer = (props: IProps) => {
	const {socialMedia, collaboratorLinks} = props;

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
							<Link href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faSquareInstagram} className={styles.icon}/>
							</Link>
							<Link href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faXTwitter} className={styles.icon}/>
							</Link>
							<Link href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.row}>
					<a href={collaboratorLinks.cuk} target="_blank" rel="noopener noreferrer">
						<Image src={'/logos/cuk_logo.svg'} width={146} height={117} alt='' />
					</a>
					<a href={collaboratorLinks.ufv} target="_blank" rel="noopener noreferrer">
						<Image src={'/logos/ufv_logo.svg'} width={223} height={100} alt='' />
					</a>
					<a href={collaboratorLinks.sdoc} target="_blank" rel="noopener noreferrer">
						<Image src={'/logos/sdoc_logo.svg'} width={90} height={86} alt='' />
					</a>
				</div>
				<div className={styles.container}>
					<hr className={styles.hr_line}/>
					<p className={styles.copyright}>
						Copyright
						<span> <FontAwesomeIcon icon={faCopyright} /> </span>
						2023 Winrack Project. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
