import { Fragment, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	text: string;
}

const LeafItem = (props: IProps) => {
	const { text } = props;

	return (
		<div className={styles.item}>
			<span className={styles.leaf_1}>
				<Image src={'/site_images/winrack_leaf_node.svg'} width={30} height={30} alt='' />
			</span>
			<p>{text}</p>
			<span className={styles.leaf_2}>
				<Image src={'/site_images/winrack_leaf_node.svg'} width={30} height={30} alt='' />
			</span>
		</div>
	);
};

export default LeafItem;
