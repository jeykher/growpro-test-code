import type { ReactElement } from 'react';

import { CardList } from '@App/components';

const HomePage = (): ReactElement => {
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
