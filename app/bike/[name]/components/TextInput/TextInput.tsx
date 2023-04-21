'use client';

import type { CSSProperties, FC as ReactFC } from 'react';

import { InputLabel, TextField } from '@mui/material';

import styles from './styles/TextInput.module.scss';

interface Props {
    className?: string | undefined;
    errors: any;
    label?: string;
    name: string;
    register: any;
    required?: boolean;
    style?: CSSProperties;
    variant?: 'standard' | 'filled' | 'outlined' | undefined;
}

export const TextInput: ReactFC<Props> = ({
    className,
    errors,
    label = '',
    name = '',
    register,
    required = false,
    style,
    variant = 'standard',
    ...rest
}) => (
    <div className={styles.control}>
        <div className={styles.inputcontainer}>            
            <TextField
                className={
                    className ? `${styles.input} className` : `${styles.input}`
                }
                label={label}
                {...register(`${name}`, { required: required })}
                style={{
                    ...style
                }}
                variant={variant}
                {...rest}
            />
        </div>        
        <div className={styles.errorcontainer}>
            {(errors[`${name}`] && errors[`${name}`].type === 'required') && <InputLabel className={styles.error}>Este campo es requerido</InputLabel>}
        </div>
    </div>
);
