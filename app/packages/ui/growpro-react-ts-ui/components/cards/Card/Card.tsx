import type { CSSProperties, FC as ReactFC } from 'react';

import Image from 'next/image';

import { Button } from './components/Button/Button';

import styles from './styles/Card.module.scss';

interface Props {
    borderColorButton?: string;
    buttonBackground?: string;
    className?: string | undefined;
    description?: string;
    height?: string;
    hoverButtonBackground?: string;
    imageDescription?: string;
    imagePath: string;
    style?: CSSProperties;
    title?: string;
    width?: string;
}

export const Card: ReactFC<Props> = ({
    borderColorButton = '#333333',
    buttonBackground = '#333333',
    className,
    description = '',
    height = '350px',
    hoverButtonBackground = '#333333',
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
                sizes="(max-width: 768px) 100vw"
                src={imagePath}
            />
        </div>
        <div className={styles.body}>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
            <Button
                background={buttonBackground}
                hoverBackground={hoverButtonBackground}
                borderColor={borderColorButton}
            >
                Alquilar
            </Button>
        </div>
    </div>
);
