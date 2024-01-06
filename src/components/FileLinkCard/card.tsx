import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

interface IProps { 
    cardItemType: string;
    title: string;
    description: string;
    isLink ?: boolean;
}

const FileLinkCard = (props: IProps) => {
    const { cardItemType, title, description, isLink } = props;
    return (
        <div className={ styles.card }>
            <div className={ styles.cardSection1 }>
                <div className={ styles.itemType }>
                    <p>{ cardItemType }</p>
                </div>
            </div>
            <div className={ styles.cardSection2 }>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
            <div className={ styles.cardSection3 }>
                {isLink == true ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={ styles.icon } /> : <FontAwesomeIcon icon={faFileArrowDown} className={ styles.icon } />}
            </div>
        </div>
    );
}

export default FileLinkCard