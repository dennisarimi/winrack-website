import React from 'react'
import styles from './styles.module.css';

interface IProps {
    title: string;
    subtitle: string;
}

const Header = (props: IProps) => {
    const { title, subtitle } = props;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.line} />
                {title}
                <span className={styles.line} />
            </h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
    )
}

export default Header