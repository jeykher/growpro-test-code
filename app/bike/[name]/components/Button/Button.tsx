'use client';

import type { CSSProperties, FC as ReactFC, ReactNode } from 'react';

import { useHover } from './hooks/useHover';

import styles from './styles/Button.module.scss';

interface Props {
    background?: string;
    borderColor?: string;
    children: ReactNode;
    className?: string | undefined;
    hoverBackground?: string;
    style?: CSSProperties;
    textColor?: string;
    type?: 'button' | 'reset' | 'submit' | undefined;
    onClick?: any;
}

export const Button: ReactFC<Props> = ({
    background = '#333333',
    borderColor = '#333333',
    children = 'Click me',
    className,
    hoverBackground = '#333333',
    style,
    textColor = '#ffffff',
    onClick,
    type = 'button',
    ...props
}) => {
    const { isHover, onMouseEnter, onMouseLeave } = useHover();
    return (
        <button
            className={
                className ? `${styles.button}className` : `${styles.button}`
            }
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                background: isHover ? hoverBackground : background,
                borderColor: borderColor,
                color: textColor,
                ...style
            }}
            type={type}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};
