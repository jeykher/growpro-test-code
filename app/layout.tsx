import type { ReactElement, ReactNode } from 'react';

import { Providers } from '@App/providers';

import { Navbar } from '@App/components';

import '@Core/infrastructure/styles/globals/globals.scss';

export const metadata = {
    title: 'Growpro | Test Code',
    description: 'Growpro Jeykher Pernia Yendes @ Code Challenge'
};

interface Props {
    children: ReactNode;
}

const RootLayout = ({ children }: Props): ReactElement => {
    return (
        <html lang="es">
            <body>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
