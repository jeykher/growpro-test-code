import type { ReactElement } from 'react';

import { Header, RentBikeForm } from '@App/bike/[name]/components';

import styles from './styles/BikeDetailPage.module.scss';

interface Params {
    name: string;
}

interface Props {
    params: Params;
}

const getBikeByName = async (bikeName: string) => {
    const response = await fetch(`http://localhost:3000/api/bikes/${bikeName}`, { cache: 'force-cache' });
    return await response.json();
};

const BikeDetailtPage = async ({ params }: Props): Promise<ReactElement> => {
    const { data: bike } = await getBikeByName(params?.name);
    return (
        <main className={styles.page}>
            <Header 
                bike={bike}
            />
            <RentBikeForm 
                bike={bike}
            />
        </main>
    );
};

export default BikeDetailtPage;
