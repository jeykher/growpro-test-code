import type { ReactNode } from 'react';

import { ThemeProvider } from '@Packages/ui/jiot-react-themeble-ts-ui';

import { themes } from '@Core/infrastructure/themes';

interface Props {
    children: ReactNode;
}

export const Providers = ({ children }: Props): JSX.Element => (
    <ThemeProvider
        initialTheme='light'
        themes={themes}
    >
        {children}
    </ThemeProvider>
);
