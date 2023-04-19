import type { ReactElement, ReactNode } from 'react';

import '@Core/infrastructure/styles/globals/globals.scss';

export const metadata = {
    title: 'Growpro | Test Code',
    description: 'Growpro Jeykher Pernia Yendes @ Code Challenge'
};

interface Props {
    children: ReactNode;
}

const RootLayout = ({
    children
}: Props): ReactElement => {
    return (
        <html lang="ES-es">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
