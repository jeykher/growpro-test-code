import type { CSSProperties, FC as ReactFC } from 'react';

import type { Bike } from '@Bike/domain/entities';

import { CardReview } from '@Packages/ui/growpro-react-ts-ui';

import styles from './styles/Header.module.scss';

interface Props {
    bike: Bike;
    className?: string | undefined;
    style?: CSSProperties;
}

export const Header: ReactFC<Props> = ({
    bike = {
        id: 0,
        imageUrl: '',
        name: '',
        type: ''
    },
    className,
    style,
    ...rest
}) => (
    <header
        className={
            className ? `${styles.header} className` : `${styles.header}`
        }
        style={{
            ...style
        }}
        {...rest}
    >
        {bike && (
            <CardReview
                label={bike.type}
                imagePath={bike.imageUrl}
                title={bike.name}
            />
        )}
    </header>
);
