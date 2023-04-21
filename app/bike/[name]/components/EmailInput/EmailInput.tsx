'use client';

import type { CSSProperties, FC as ReactFC } from 'react';

import { InputLabel, TextField } from '@mui/material';

import styles from './styles/EmailInput.module.scss';

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

export const EmailInput: ReactFC<Props> = ({
    className,
    errors,
    label = '',
    name = '',
    register,
    required = false,
    style,
    variant = 'standard',
    ...rest
}) => {
    return (
        <div className={styles.control}>        
            <div className={styles.inputcontainer}>
                <TextField
                    className={
                        className ? `${styles.input} className` : `${styles.input}`
                    }
                    label={label}
                    {...register(`${name}`, { required: required, pattern: /^[\w.%+-ñ]+@[a-zA-Z0-9ñ][\w.-]*\.[a-zA-Z]{2,}$/i
                })}
                    style={{
                        ...style
                    }}
                    variant={variant}
                    {...rest}
                />
            </div>
            <div className={styles.errorcontainer}>
                {(errors[`${name}`] && errors[`${name}`].type === 'required') && <InputLabel className={styles.error}>Este campo es requerido</InputLabel>}
                {(errors[`${name}`] && errors[`${name}`].type === 'pattern') && <InputLabel className={styles.error}>Este no es un email válido.</InputLabel>}
            </div>
        </div>
    );
};
