import type { CSSProperties, FC as ReactFC } from 'react';

import Image from 'next/image';

import { Button } from './components/Button/Button';

import styles from './styles/Card.module.scss';

interface Props {
    className?: string | undefined;
    description?: string;
    height?: string;
    imageDescription?: string;
    imagePath: string;
    style?: CSSProperties;
    title?: string;
    width?: string;
}

export const Card: ReactFC<Props> = ({
    className,
    description = '',
    height = '350px',
    imageDescription = '',
    imagePath = '',
    style,
    title = '',
    width = '250px',
    ...rest
}) => (
    <div
        className={className ? `${styles.card}className` : `${styles.card}`}
        style={{
            height: height,
            width: width,
            ...style
        }}
        {...rest}
    >
        <div className={styles.header}>
            <Image
                alt={imageDescription}
                className={styles.image}
                fill
                priority
                sizes="100vw"
                src={imagePath}
            />
        </div>
        <div className={styles.body}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
            <Button
                background="#7a33cc"
                hoverBackground="#682bad"
                borderColor="#6229a3"
            >
                Alquilar
            </Button>
        </div>
    </div>
);
