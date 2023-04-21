import type { ReactElement } from 'react';

import { BikeList } from '@App/components';

import { bikesPresenter } from '@Bike/adapters/presenters';

import styles from './styles/HomePage.module.scss';

const getBikes = async () => {
    const response = await fetch('http://localhost:3000/api/bikes', { next: { revalidate: 10 } });
    const data = await response.json();
    return {
        ...data,
        data: bikesPresenter(data.data)
    };
};

const HomePage = async (): Promise<ReactElement> => {
    const { data: bikes, type: responseType } = await getBikes();
    return (
        <main
            className={styles.page}
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
