import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

interface IProps {}

const Timeline = (props: IProps) => {
	const {} = props;

	return (
		<div className={styles.container}>
			<span className={styles.line} />

			<div className={styles.grid}>
				<div className={`${styles.item} ${styles.item_1}`}>
					<span className={styles.icon}>
						<FontAwesomeIcon icon={faUser} />
					</span>
					<span className={styles.date}>Oct 2022 - Nov 2022</span>
					<div className={styles.card}>
						<h4>Preparation and Data Collection</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ac lacus ut ultricies. Proin
							cursus
						</p>
					</div>
				</div>

				<div className={`${styles.item} ${styles.item_2}`}>
					<span className={styles.icon}>
						<FontAwesomeIcon icon={faHouse} />
					</span>
					<span className={styles.date}>Oct 2022 - Nov 2022</span>
					<div className={styles.card}>
						<h4>Co-creations and Inventions</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ac lacus ut ultricies. Proin
							cursus
						</p>
					</div>
				</div>

				<div className={`${styles.item} ${styles.item_3}`}>
					<span className={styles.icon}>
						<FontAwesomeIcon icon={faPeopleGroup} />
					</span>
					<span className={styles.date}>Oct 2022 - Nov 2022</span>
					<div className={styles.card}>
						<h4>Project Monitoring</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ac lacus ut ultricies. Proin
							cursus
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
