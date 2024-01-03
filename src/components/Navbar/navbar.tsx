import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	currentPath?: string;
}

const Navbar = (props: IProps) => {
	const { currentPath = '/' } = props;

	return (
		<div className={styles.nav_box}>
			<nav className={styles.navbar}>
				<div className={styles.links}>
					<Link href={'/'} className={`${styles.link} ${currentPath === '/' ? styles.link_active : ''}`}>
						HOME
					</Link>
					<Link href={'/results'} className={`${styles.link} ${currentPath === '/resuts' ? styles.link_active : ''}`}>
						RESULTS
					</Link>
					<Link href={'/'} className={`${styles.link} ${currentPath === '/' ? styles.link_active : ''}`}>
						<Image src={'/logos/winrack_tiny_logo.svg'} alt='logo' width={75} height={76} />
					</Link>
					<Link href={'/resources'} className={`${styles.link} ${currentPath === '/resources' ? styles.link_active : ''}`}>
						RESOURCES
					</Link>
					<Link href={'/team'} className={`${styles.link} ${currentPath === '/team' ? styles.link_active : ''}`}>
						MEET THE TEAM
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
