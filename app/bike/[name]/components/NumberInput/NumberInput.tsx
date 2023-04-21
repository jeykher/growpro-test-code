'use client';

import type { CSSProperties, FC as ReactFC } from 'react';

import { InputLabel, TextField } from '@mui/material';

import styles from './styles/NumberInput.module.scss';

interface Props {
    className?: string | undefined;
    errors: any;
    label?: string;
    name: string;
    register: any;
    setRentDays: any;
    required?: boolean;
    style?: CSSProperties;
    variant?: 'standard' | 'filled' | 'outlined' | undefined;
}

export const NumberInput: ReactFC<Props> = ({
    className,
    errors,
    label = '',
    setRentDays,
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
                {...register(`${name}`, { required: required, pattern: /^[1-9]\d*$/ })}
                style={{
                    ...style
                }}
                variant={variant}
                inputProps={{
                    type: 'number',
                    min: 1
                }}
                onChange={(event: any) => setRentDays(event.target.value)}
                {...rest}
            />
        </div>        
        <div className={styles.errorcontainer}>
            {(errors[`${name}`] && errors[`${name}`].type === 'required') && <InputLabel className={styles.error}>Este campo es requerido</InputLabel>}
            {(errors[`${name}`] && errors[`${name}`].type === 'pattern') && <InputLabel className={styles.error}>Debe especificar un número mayor a cero</InputLabel>}
        </div>
    </div>
);
