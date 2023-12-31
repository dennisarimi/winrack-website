import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	icon: string;
	title: string;
	description: string;
	link: string;
}

const LogoCard = (props: IProps) => {
	const { icon, title, description, link } = props;

	return (
		<div className={styles.card}>
			<span>
				<Image src={icon} alt='' width={125} height={95} />
			</span>
			<hr />
			<h5>{title}</h5>
			<p>{description}</p>
			<button>
				Visit Website
				<Link href={link} />
			</button>
		</div>
	);
};

export default LogoCard;
