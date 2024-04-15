import React from 'react';
type TwoColumnTableProps = {
    children: React.ReactNode;
    className?: string;
};
declare const TwoColumnTable: {
    ({ children, className }: TwoColumnTableProps): JSX.Element;
    Body: ({ children, className }: TwoColumnTableProps) => JSX.Element;
    tr: ({ children, className }: TwoColumnTableProps) => JSX.Element;
    tdLeft: ({ children, className }: TwoColumnTableProps) => JSX.Element;
    tdRight: ({ children, className }: TwoColumnTableProps) => JSX.Element;
};
export default TwoColumnTable;
