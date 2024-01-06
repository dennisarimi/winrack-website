import Image from 'next/image';
import styles from './styles.module.css';
import Header from '@/components/Header/header';
import TeamMemberCard from '@/components/TeamMemberCard/card';
import { teamMembers } from '../../../public/team_members';

export default function Team() {

	return (
		<div className={styles.main}>
			<Header 
				title={'MEET THE TEAM'} 
				subtitle={'Meet the diverse and dynamic members of our multidisciplinary research team across Canada and Kenya.'}
			/>
			<div className={styles.teamMembersContainer}>
				{teamMembers.map((member, index) => (
					<TeamMemberCard
						key={ index }
						image={ member.image }
						name={ member.name }
						position={ member.position }
						description={ member.description }
						socialMedia={ member.socialMedia }
					/>
				))}
			</div>
		</div>
	);
}
