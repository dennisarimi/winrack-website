import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	icon: string;
	text: ReactNode;
}

const IconCard = (props: IProps) => {
	const { icon, text } = props;

	return (
		<div className={styles.icon_card}>
			<span className={styles.circle}>
				<Image src={icon} alt='' width={25} height={25} />
			</span>
			<div>{text}</div>
		</div>
	);
};

export default IconCard;
