import type { ReactElement, ReactNode } from 'react';

import { GrowProBrand, GrowProNavbar } from '@Packages/ui/growpro-react-ts-ui';

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
                <GrowProNavbar
                    brand={
                        <GrowProBrand
                            color="#ff5766"
                            height="28px"
                            width="188.297px"
                        />
                    }
                />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
