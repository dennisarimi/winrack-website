import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	currentPath?: string;
}

const Navbar = (props: IProps) => {
	const { currentPath = '/' } = props;

	return (
		<div className={styles.links_container}>
			<Link href={'/'} className={`${styles.link} ${currentPath === '/' ? styles.link_active : ''}`}>
				HOME
			</Link>
			<Link href={'/results'} className={`${styles.link} ${currentPath === '/resuts' ? styles.link_active : ''}`}>
				RESULTS
			</Link>
			<span className={styles.logo}>
				<Image src={'/logo.png'} alt='logo' width={40} height={45} />
			</span>
			<Link href={'/'} className={`${styles.link} ${currentPath === '/resources' ? styles.link_active : ''}`}>
				RESOURCES
			</Link>
			<Link href={'/info'} className={`${styles.link} ${currentPath === '/team' ? styles.link_active : ''}`}>
				MEET THE TEAM
			</Link>
		</div>
	);
};

export default Navbar;
