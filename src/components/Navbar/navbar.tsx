"use client";
import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";

interface IProps {
	currentPath?: string;
}

const Navbar = (props: IProps) => {
	const { currentPath = '/' } = props;
	const pathname = usePathname();

	return (
		<div className={styles.nav_box}>
			<nav className={styles.navbar}>
				<div className={styles.links}>
					<Link href={'/'} className={pathname == "/" ? styles.link_active : styles.link}>
						HOME
					</Link>
					<Link href={'/results'} className={pathname == "/results" ? styles.link_active : styles.link}>
						RESULTS
					</Link>
					<Link href={'/'}>
						<Image src={'/logos/winrack_tiny_logo.svg'} alt='logo' width={75} height={76} />
					</Link>
					<Link href={'/resources'} className={pathname == "/resources" ? styles.link_active : styles.link}>
						RESOURCES
					</Link>
					<Link href={'/team'} className={pathname == "/team" ? styles.link_active : styles.link}>
						MEET THE TEAM
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
