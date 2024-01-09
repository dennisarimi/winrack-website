import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

interface IProps { 
    itemType: string;
    title: string;
    fileDate: Date;
    description: string;
    isLink ?: boolean;
}

const FileLinkCard = (props: IProps) => {
    const { itemType, title, fileDate, description, isLink } = props;
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    };
    return (
        <div className={ styles.card }>
            <div className={ styles.cardSection1 }>
                <div className={ styles.itemType }>
                    <p>{ itemType }</p>
                </div>
            </div>
            <div className={ styles.cardSection2 }>
                <div className={ styles.titleDate }>
                    <h2>{ title }</h2>
                    <h2> { fileDate.toLocaleDateString('en-GB', options) }</h2>
                </div>
                <p>{ description }</p>
            </div>
            <div className={ styles.cardSection3 }>
                {isLink == true ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={ styles.icon } /> : <FontAwesomeIcon icon={faFileArrowDown} className={ styles.icon } />}
            </div>
        </div>
    );
}

export default FileLinkCard