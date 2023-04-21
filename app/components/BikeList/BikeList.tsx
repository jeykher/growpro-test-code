'use client';

import type { FC as ReactFC } from 'react';

import type { Bike } from '@Bike/domain/entities';

import Link from 'next/link';

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
                    <Link
                        key={bike.id}
                        href={`/bike/${bike.name.replace(/\s+/g, '-').toLowerCase()}`}
                    >                    
                        <Card
                            borderColorButton={theme['--border-primary']}
                            buttonBackground={theme['--secondary']}
                            description={bike.type}
                            hoverButtonBackground={theme['--hover-primary']}
                            imagePath={bike.imageUrl}
                            title={bike.name}
                        />
                    </Link>
                ))
            }
        </>
    );
};