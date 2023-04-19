'use client';

import type { FC as ReactFC } from 'react';

import type { Bike } from '@Bike/domain/entities';

import { Card } from '@Packages/ui/growpro-react-ts-ui';

import { useTheme } from '@Packages/ui/jiot-react-themeble-ts-ui';

interface Props {
    bikes: Array<Bike>;
}

export const BikeList: ReactFC<Props> = ({
    bikes = []
}) => {    
    const { theme } = useTheme();
    return (
        <>
            {
                bikes?.map((bike: Bike) => (
                    <Card
                        key={bike.id}
                        borderColorButton={theme['--border-primary']}
                        buttonBackground={theme['--secondary']}
                        description={bike.type}
                        hoverButtonBackground={theme['--hover-primary']}
                        imagePath={bike.imageUrl}
                        title={bike.name}
                    />
                ))
            }
        </>
    );
};