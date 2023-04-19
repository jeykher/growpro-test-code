import type { CSSProperties, ReactElement, FC as ReactFC } from 'react';

import styles from './styles/GrowProNavbar.module.scss';

interface Props {
    background?: string;
    brand?: string | JSX.Element | ReactElement;
    className?: string | undefined;
    style?: CSSProperties;
}

export const GrowProNavbar: ReactFC<Props> = ({
    background = '#ffffff',
    brand = undefined,
    className,
    style,
    ...rest
}) => (
    <nav
        className={className ? `${styles.navbar} className` : `${styles.navbar}`}
        style={{
            background: background,
            ...style
        }}
        {...rest}
    >
        <div className={styles.brand}>
            {
                brand && (
                    brand
                )
            }
        </div>
    </nav>
);
