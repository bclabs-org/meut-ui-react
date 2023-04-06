import React from 'react';
type TableProps = {
    children: React.ReactNode;
    className?: string;
};
declare const Table: {
    ({ children, className }: TableProps): JSX.Element;
    Head: ({ children, className }: TableProps) => JSX.Element;
    Body: ({ children, className }: TableProps) => JSX.Element;
    tr: ({ children, className }: TableProps) => JSX.Element;
    th: ({ children, className }: TableProps) => JSX.Element;
    td: ({ children, className }: TableProps) => JSX.Element;
};
export default Table;
