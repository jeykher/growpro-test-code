'use client';

import type { CSSProperties, FC as ReactFC } from 'react';

import { useRouter } from 'next/navigation';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

import { Button } from '../Button/Button';

interface Props {
    className?: string | undefined;
    style?: CSSProperties;
    title?: string;
    description?: string;
    bikeToRent: any;
    open: boolean;
    handleChange: any;
}

export const Modal: ReactFC<Props> = ({ className, description = '', bikeToRent = {}, handleChange, open = false, style, title = '', ...rest }) => {
    const router = useRouter();
    const saveInLocalStorage = () => {
        localStorage.setItem('bikes', JSON.stringify(bikeToRent));
        router.push('/bike/success/');
    };
    return (
        <Dialog
            className={
                className ? `${className}` : ``
            }
            style={{
                ...style
            }}
            open={open}
            onClose={() => handleChange(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            { ...rest }
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                    {
                        bikeToRent?.bike && (
                            <span style={{
                                color: '#878787',
                                fontWeight: '600',
                                display: 'block',
                                padding: '1rem'
                            }}>Costo {`${bikeToRent.bike.cost}$`}</span>
                        )
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    background="#ff5766"
                    borderColor="#ff5766"
                    hoverBackground="#ff4757"
                    textColor="#ffffff"
                    type="button"
                    onClick={() => handleChange(false)}
                >
                    Cancelar
                </Button>
                <Button
                    background="#7a33cc"
                    borderColor="#6229a3"
                    hoverBackground="#682bad"
                    textColor="#ffffff"
                    type="button"
                    onClick={saveInLocalStorage}
                >
                    Alquilar
                </Button>
            </DialogActions>
        </Dialog>
    );
};
