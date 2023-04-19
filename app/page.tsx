import type { ReactElement } from 'react';

import { CardList } from '@App/components';

const getData = async () => {
    const response = await fetch('http://localhost:3000/api/bike/bikes', { cache: 'no-store' });
    return response.json();
}

const HomePage = async (): Promise<ReactElement> => {
    const { data: bikes } = await getData();
    console.log(bikes);
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '10rem'
            }}
        >
            <CardList />
        </div>
    );
};

export default HomePage;
