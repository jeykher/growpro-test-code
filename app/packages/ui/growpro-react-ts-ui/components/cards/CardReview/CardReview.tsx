import type { CSSProperties, FC as ReactFC } from 'react';

import Image from 'next/image';

import styles from './styles/CardReview.module.scss';

interface Props {
    className?: string | undefined;
    label?: string;
    imagePath?: string;
    style?: CSSProperties;
    title?: string;
}

export const CardReview: ReactFC<Props> = ({ className, label = '', imagePath = '', style, title = '', ...rest }) => (
    <div
        className={className ? `${styles.card} className` : `${styles.card}`}
        style={{
            ...style
        }}
        {...rest}
    >
        <div className={styles.product}>
            <div className={styles.image}>
                <Image
                    alt="baywood"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw"
                    src={imagePath}
                />
            </div>
        </div>
        <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.tag}>
                <span>Bicicleta </span>
                <span>{label}</span>
            </div>
        </div>
    </div>
);
