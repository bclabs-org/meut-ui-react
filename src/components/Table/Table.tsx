import React from 'react';

type TableProps = {
  children: React.ReactNode;
  customClassName?: string;
  additionalClassName?: string;
  isBgGray?: boolean;
};

const Table = ({ children, customClassName = '' }: TableProps) => (
  <table className={`min-w-full divide-y divide-gray-300 ${customClassName}`}>{children}</table>
);

const Head: React.FC<TableProps> = ({
  children,
  isBgGray,
  additionalClassName = '',
}: TableProps) => (
  <thead className={`${isBgGray && 'bg-gray-50'} ${additionalClassName}`}>{children}</thead>
);

const Body: React.FC<TableProps> = ({ children, additionalClassName = '' }: TableProps) => (
  <tbody className={`divide-y divide-gray-200 bg-white ${additionalClassName}`}>{children}</tbody>
);

const tr: React.FC<TableProps> = ({ children, isBgGray, customClassName = '' }: TableProps) => (
  <tr className={`${isBgGray && 'bg-gray-50'} ${customClassName}`}>{children}</tr>
);

const th: React.FC<TableProps> = ({
  children,
  customClassName = '',
  additionalClassName = '',
}: TableProps) => (
  <th
    className={` ${
      customClassName || `px-4 py-3 text-left text-sm font-semibold ${additionalClassName}`
    }`}
  >
    {children}
  </th>
);

const td: React.FC<TableProps> = ({
  children,
  isBgGray,
  customClassName = '',
  additionalClassName = '',
}: TableProps) => (
  <td
    className={`${isBgGray && 'bg-gray-50'} ${
      customClassName ||
      `whitespace-nowrap p-4 text-sm font-medium text-neutral ${additionalClassName}`
    }`}
  >
    {children}
  </td>
);

Table.Head = Head as React.FC<TableProps>;
Table.Body = Body as React.FC<TableProps>;
Table.tr = tr as React.FC<TableProps>;
Table.th = th as React.FC<TableProps>;
Table.td = td as React.FC<TableProps>;

export default Table as React.FC<TableProps>;
