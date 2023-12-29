import Image from 'next/image';
import styles from './styles.module.css';
import Header from '@/components/Header/header';

export default function Team() {
	return (
		<div className={styles.main}>
			<Header 
				title={'MEET THE TEAM'} 
				subtitle={'Meet the diverse and dynamic members of our multidisciplinary research team across Canada and Kenya.'}
			/>
		</div>
	);
}
