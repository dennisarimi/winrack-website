import Image from 'next/image';
import styles from './styles.module.css';
import Header from '@/components/Header/header'
import FileLinkCard from '@/components/FileLinkCard/card'

export default function Results() {
	return (
		<div className={styles.main}>
			<Header
				title={'RESULTS'}
				subtitle={"Explore our research-driven insights on how agricultural cooperatives positively impact Kenya by promoting overall well-being and healthier lives. Here, you'll find our written work about the role and impact of cooperatives in the agricultural landscape."}
			/>
			<div className={styles.searchSection}>

			</div>
			<div className={styles.resultsContainer}>
				<FileLinkCard 
					cardItemType={'BLOG'} 
					title={'This is a blog example'} 
					description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
					isLink
				/>
				<FileLinkCard 
					cardItemType={'PDF'} 
					title={'This is a pdf example'} 
					description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
				/>
				<FileLinkCard 
					cardItemType={'BLOG'} 
					title={'This is a blog example'} 
					description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
					isLink
				/>
				<FileLinkCard 
					cardItemType={'PDF'} 
					title={'This is a pdf example'} 
					description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
				/>
				<FileLinkCard 
					cardItemType={'BLOG'} 
					title={'This is a blog example'} 
					description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
					isLink
				/>
				<FileLinkCard 
					cardItemType={'PDF'} 
					title={'This is a pdf example'} 
					description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
				/>
			</div>
		</div>
	);
}
