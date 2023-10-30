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

const Head = ({ children, isBgGray, additionalClassName = '' }: TableProps) => (
  <thead className={`${isBgGray && 'bg-gray-50'} ${additionalClassName}`}>{children}</thead>
);

const Body = ({ children, additionalClassName = '' }: TableProps) => (
  <tbody className={`divide-y divide-gray-200 bg-white ${additionalClassName}`}>{children}</tbody>
);

const tr = ({ children, isBgGray, customClassName = '' }: TableProps) => (
  <tr className={`${isBgGray && 'bg-gray-50'} ${customClassName}`}>{children}</tr>
);

const th = ({ children, customClassName = '', additionalClassName = '' }: TableProps) => (
  <th
    className={` ${
      customClassName || `px-4 py-3 text-left text-sm font-semibold ${additionalClassName}`
    }`}
  >
    {children}
  </th>
);

const td = ({ children, isBgGray, customClassName = '', additionalClassName = '' }: TableProps) => (
  <td
    className={`${isBgGray && 'bg-gray-50'} ${
      customClassName ||
      `whitespace-nowrap p-4 text-sm font-medium text-neutral ${additionalClassName}`
    }`}
  >
    {children}
  </td>
);

Table.Head = Head;
Table.Body = Body;
Table.tr = tr;
Table.th = th;
Table.td = td;

export default Table;
