'use client';

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { ThemeType } from '../types/ThemeType.type';

import { createContext, useState } from 'react';

interface ContextProps {
    themeType: ThemeType;
    theme: any;
    setActiveTheme: Dispatch<SetStateAction<ThemeType>>;
}

interface ProviderProps {
    children: ReactNode;
    initialTheme: ThemeType;
    themes: any;
}

export const ThemeContext = createContext<ContextProps>({} as ContextProps);

export const ThemeProvider = ({
    children,
    initialTheme,
    themes
}: ProviderProps) => {
    const [activeTheme, setActiveTheme] = useState<ThemeType>(initialTheme);
    return (
        <ThemeContext.Provider
            value={{
                themeType: activeTheme,
                theme: themes[activeTheme],
                setActiveTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
