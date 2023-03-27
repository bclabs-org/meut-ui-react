import React from 'react';
type ChipProps = {
    label: string;
    selected: boolean;
    count?: number;
    handleClick?: () => void;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
};
declare const Chip: React.FC<ChipProps>;
export default Chip;
