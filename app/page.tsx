import type { ReactElement } from 'react';

import { Card } from '@Packages/ui/growpro-react-ts-ui';

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
            <Card 
                description='Antigua'
                imagePath='/assets/images/baywood.jpg'
                title='Baywood'
            />
        </div>
    );
};

export default HomePage;
