'use client';

import type { ReactElement } from 'react';

import { GrowProBrand, GrowProNavbar } from '@Packages/ui/growpro-react-ts-ui';

import { useTheme } from '@Packages/ui/jiot-react-themeble-ts-ui';

export const Navbar = (): ReactElement => {
    const { theme } = useTheme();
    return (
        <GrowProNavbar
            brand={
                <GrowProBrand
                    color={theme['--primary']}
                    height="28px"
                    width="188.297px"
                />
            }
        />
    );
};
