import Image from 'next/image';
import styles from './styles.module.css';
import IconCard from '@/components/IconCard/card';
import LogoCard from '@/components/LogoCard/card';

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.landing}>
				<span className={styles.logo} />
				<button type='button'>Project Overview</button>
				<span className={styles.leaf}>
					<Image src={'/site_images/winrack_leaf.svg'} width={300} height={300} alt='' />
				</span>
				<span className={`${styles.line} ${styles.line_white}`} />
				<span className={`${styles.line} ${styles.line_green}`} />
			</section>

			<section className={styles.about}>
				<h2>About WINRACK</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ac lacus ut ultricies. Proin cursus,
					ex eu sagittis congue, quam eros vehicula ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec volutpat ac lacus ut ultricies. Proin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					volutpat ac lacus ut
				</p>
				<div className={styles.container}>
					<div className={styles.image}>
						<Image
							src={'/site_images/project_locations.svg'}
							width={450}
							height={450}
							alt=''
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<div className={styles.agriculture}>
						<h3>Why Agricultural Cooperatives?</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ac lacus ut ultricies. Proin
							cursus, ex eu sagittis congue, quam eros vehicula ligula.
						</p>
					</div>
					<div className={styles.locations}>
						<h3>Project Locations</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ac lacus ut ultricies. Proin
							cursus, ex eu sagittis congue, quam eros vehicula ligula.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.objectives}>
				<div className={styles.header}>
					<Image src={'/site_images/winrack_leaf_node.svg'} width={45} height={45} alt='' />
					<h2 className={styles.title}>Objectives</h2>
				</div>
				<ul>
					<li>
						What are the socio-cultural, economic, and technical barriers to women’s participation in agricultural
						cooperatives?
					</li>
					<li>
						What are the gender-based factors that influenced the impact of COVID-19 on the work of women in
						agricultural cooperatives?
					</li>
					<li>
						To what extent are agricultural cooperatives employed as leverages for gender-responsive healthcare
						financing?
					</li>
					<li>
						Are policies, practices and strategies put in place in agricultural cooperatives to alleviate the impact
						of COVID-19 gender-responsive?
					</li>
				</ul>
			</section>

			<section className={styles.timeline}>*Timeline*</section>

			<section className={styles.theory}>
				<h2>Theory of Change</h2>
				<Image src={''} width={15} height={15} alt='' />
			</section>

			<section className={styles.results}>
				<h2>Expected Results</h2>
				<div className={styles.container}>
					<IconCard
						icon='/icons/trending-up.svg'
						text={
							<div>
								<span className={styles.highlight}>Increase</span> in Women’s membership and access to credit by
								20% through cooperative membership.
							</div>
						}
					/>
					<IconCard
						icon='/icons/layers.svg'
						text={
							<div>
								A <span className={styles.highlight}>human-centered</span> design approach for health innovation
								to empower a community of 10,000 women.
							</div>
						}
					/>
					<IconCard
						icon='/icons/briefcase.svg'
						text={
							<div>
								A <span className={styles.highlight}>10% increase</span> in women’s membership and participation
								in agricultural cooperatives
							</div>
						}
					/>
					<IconCard
						icon='/icons/users.svg'
						text={
							<div>
								A 20% increase of women in <span className={styles.highlight}>leadership positions</span> in
								agricultural cooperatives.
							</div>
						}
					/>
					<IconCard
						icon='/icons/home.svg'
						text={
							<div>
								A <span className={styles.highlight}>20% improvement</span> in women’s access to health care
								services.
							</div>
						}
					/>
				</div>
			</section>

			<section className={styles.collaborators}>
				<h2>Collaborators</h2>
				<p>
					This project is funded under Women’s health and economic empowerment for a COVID-19 Recovery that is
					Inclusive, Sustainable and Equitable (Women RISE), an initiative of Canada’s International Development
					Research Centre, the Canadian Institutes of Health Research and the Social Sciences and Humanities Research
					Council.
				</p>
				<div className={styles.container}>
					<LogoCard
						icon='/logos/cuk_logo.svg'
						title='The Cooperative University of Kenya (CUK)'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
						link='www.google.com'
					/>
					<LogoCard
						icon='/logos/ufv_logo.svg'
						title='University of the Fraser Valley (UFV)'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
						link='www.google.com'
					/>
					<LogoCard
						icon='/logos/sdoc_logo.svg'
						title='State Department of Cooperatives'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
						link='www.google.com'
					/>
				</div>
			</section>

			<section className={styles.partners}>
				<h2>Important Partners</h2>
				<Image src={'/site_images/women_rise.svg'} width={300} height={300} alt='' style={{ objectFit: 'contain' }} />
				<div className={styles.container}>
					<Image
						src={'/site_images/funders_title.png'}
						width={300}
						height={300}
						alt=''
						style={{ objectFit: 'contain' }}
					/>
					<Image src={'/site_images/hpro_title.png'} width={300} height={300} alt='' style={{ objectFit: 'contain' }} />
					<Image src={'/logos/idrc_logo.svg'} width={300} height={300} alt='' style={{ objectFit: 'contain' }} />
					<Image src={'/logos/aphrc_logo.svg'} width={300} height={300} alt='' style={{ objectFit: 'contain' }} />
					<Image src={'/logos/cihr_irsc_logo.svg'} width={300} height={300} alt='' style={{ objectFit: 'contain' }} />
					<Image src={'/logos/femnet_logo.svg'} width={300} height={300} alt='' style={{ objectFit: 'contain' }} />
					<Image src={'/logos/sshrc_crsh_logo.svg'} width={300} height={300} alt='' style={{ objectFit: 'contain' }} />
					<Image src={'/logos/agakhan_logo.svg'} width={300} height={300} alt='' style={{ objectFit: 'contain' }} />
				</div>
			</section>
		</main>
	);
}
