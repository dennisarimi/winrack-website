import React from 'react'
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



interface IProps {
    name: string;
    position: string;
    description: string;
    image: string;
    socialMedia?: {
        twitter?: string;
        linkedin?: string;
    };
}

const TeamMemberCard = (props: IProps) => {
    const { name, description, image, position, socialMedia } = props;
    return (
        <div className={ styles.card }>
            <img src={ image } alt={`${name}'s headshot`} className={ styles.image } />
            <h3 className={ styles.name }>{ name }</h3>
            <span className={styles.line} />
            <p className={ styles.position }>{ position }</p>
            <p className={ styles.description }>{ description }</p>
            { socialMedia && (
                <div className={styles.socialMedia}>
                    {socialMedia.twitter && (
                        <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={ faXTwitter } className={ styles.icon }/>
                        </a>
                    )}
                    {socialMedia.linkedin && (
                        <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={ faLinkedin } className={ styles.icon }/>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default TeamMemberCard