import type { ReactElement } from 'react';

import { BikeList } from '@App/components';

import { bikesPresenter } from '@Bike/adapters/presenters';

import styles from './styles/HomePage.module.scss';

const getData = async () => {
    const response = await fetch('http://localhost:3000/api/bike/bikes', { cache: 'no-store' });
    const data = await response.json();
    return {
        ...data,
        data: bikesPresenter(data.data)
    };
};

const HomePage = async (): Promise<ReactElement> => {
    const { data: bikes, type: responseType } = await getData();
    return (
        <main
            className={styles.homepage}
        >
            {
                responseType === 'data' && (
                    <BikeList 
                        bikes={bikes}
                    />
                )
            }
        </main>
    );
};

export default HomePage;
