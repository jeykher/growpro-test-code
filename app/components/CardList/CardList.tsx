'use client';

import type { FC as ReactFC } from 'react';

import { Card } from '@Packages/ui/growpro-react-ts-ui';

import { useTheme } from '@Packages/ui/jiot-react-themeble-ts-ui';

export const CardList: ReactFC = () => {
    const { theme } = useTheme();
    return (
        <Card
            borderColorButton={theme['--border-primary']}
            buttonBackground={theme['--secondary']}
            description='Antigua'
            hoverButtonBackground={theme['--hover-primary']}
            imagePath='/assets/images/baywood.jpg'
            title='Baywood'
        />
    );
};