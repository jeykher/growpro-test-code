import type { Theme } from '@Core/domain/interfaces';

import { baseTheme } from './base.theme';

export const lightTheme: Theme = {
    '--black': '#000000',
    '--border-primary': '#6229a3',
    '--hover-primary': '#682bad',
    '--primary': '#ff5766',
    '--secondary': '#7a33cc',
    '--white': '#ffffff',
    ...baseTheme
};
