import Image from 'next/image';
import styles from './styles.module.css';
import Header from '@/components/Header/header'
import FileLinkCard from '@/components/FileLinkCard/card'
import { resourceFiles } from './resource_files'

export default function Results() {
	return (
		<div className={styles.main}>
			<Header
				title={'RESULTS'}
				subtitle={"Explore our research-driven insights on how agricultural cooperatives positively impact Kenya by promoting overall well-being and healthier lives. Here, you'll find our written work about the role and impact of cooperatives in the agricultural landscape."}
			/>
			<div className={styles.searchSection}>
				{
					/* filters go here */
				}
			</div>
			<div className={styles.resultsContainer}>
				{resourceFiles.map((info, index) => (
					<FileLinkCard 
						key={ index }
						itemType={ info.itemType } 
						title={ info.title } 
						fileDate={ info.fileDate } 
						description={ info.description }	
						isLink={ info.isLink }				
					/>
				))}
			</div>
		</div>
	);
}
