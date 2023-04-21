import { useState } from 'react';

interface HookValues {
    isHover: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export const useHover = (): HookValues => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const onMouseEnter = () => {
        setIsHover(true);
    };
    const onMouseLeave = () => {
        setIsHover(false);
    };
    return {
        isHover,
        onMouseEnter,
        onMouseLeave
    };
};
