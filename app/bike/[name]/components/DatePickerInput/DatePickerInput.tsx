import type { CSSProperties, FC as ReactFC } from 'react';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Controller } from 'react-hook-form';

import styles from './styles/DatePickerInput.module.scss';

interface Props {
    className?: string | undefined;
    control: any;
    errors: any;
    name: string;
    getValues?: any;
    label?: string;
    onChange?: any;
    disablePast?: boolean;
    required?: boolean;
    validate?: any;
    setDateSetted: any;
    style?: CSSProperties;
}

const errorMessage = 'Debe seleccionar una fecha valida.'

export const DatePickerInput: ReactFC<Props> = ({
    className,
    control,
    errors,
    name = '',
    getValues,
    label = '',
    validate,
    onChange,
    setDateSetted,
    disablePast = false,
    required = false,
    style,
    ...rest
}) => {
    return (
        <div
            className={
                className ? `${styles.control} className` : `${styles.control}`
            }
            style={{
                ...style
            }}
            {...rest}
        >
            <div className={styles.inputcontainer}>
                <Controller
                    control={control}
                    name={name}
                    rules={{
                        required: required,
                        validate: validate
                    }}
                    render={({  
                        field: { ref, onBlur, name, ...field },
                        fieldState
                    }) => (
                        <DatePicker
                            className={styles.input}
                            {...field}
                            disablePast={disablePast}
                            inputRef={ref}
                            label={label}
                            onChange={(value) => setDateSetted(value)}
                            slotProps={{
                                textField: {
                                    onBlur: onBlur,
                                    name: name,
                                    error: !!fieldState.error,
                                    helperText: (errors[`${name}`]) ? errorMessage : '',
                                },
                            }}
                        />
                    )}
                />
            </div>
        </div>
    );
};
