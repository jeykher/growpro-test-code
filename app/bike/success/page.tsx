import type { ReactElement } from 'react';

import Link from 'next/link';

import { Button } from '../[name]/components/Button/Button';

import styles from './styles/SuccessRentPage.module.scss';

const SuccessRent = (): ReactElement => (
    <main className={styles.page}>
        <div className={styles.box}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
                viewBox="0 0 512 512"
                fill='#4fb477'
            >
                <path 
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <span className={styles.message}>Solicitud Procesada!</span>
            <Link
                href='/'
            >
                <Button
                    background="#7a33cc"
                    borderColor="#6229a3"
                    hoverBackground="#682bad"
                    textColor="#ffffff"
                    type="button"
                >
                    Ir al inicio
                </Button>
            </Link>
        </div>
    </main>
);

export default SuccessRent;
