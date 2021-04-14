import React from 'react';
import {
  useTable,
  Column,
  useSortBy,
  useColumnOrder,
} from 'react-table';
import { motion, AnimatePresence } from 'framer-motion';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TableProps {
  columns: Column<any>[],
  data: any[],
  isLoading?: boolean,
  animate?: {
    table: any,
    tbody: any,
    td: any,
    tr: any,
  };
}

const skeletonData = new Array(15).fill(0).map(() => ({
  one: '',
  two: '',
  three: '',
  four: '',
  five: '',
  six: '',
  seven: '',
  eight: '',
  nine: '',
  ten: '',
}));

const skeletonColumns = [
  {
    Header: 'one',
    accessor: 'one',
  },
  {
    Header: 'two',
    accessor: 'two',
  },
  {
    Header: 'three',
    accessor: 'three',
  },
  {
    Header: 'four',
    accessor: 'four',
  },
  {
    Header: 'five',
    accessor: 'five',
  },
  {
    Header: 'six',
    accessor: 'six',
  },
  {
    Header: 'seven',
    accessor: 'seven',
  },
  {
    Header: 'eight',
    accessor: 'eight',
  },
  {
    Header: 'nine',
    accessor: 'nine',
  },
];

export const scrollbarStyles = `
  overflow: auto;

  scrollbar-color: #E0E0E0;
  scrollbar-width: thin;

  &::-webkit-scrollbar-thumb {
    background-color: #F3F3F3;
  }

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    border-radius: 5px;
  }

  &:hover::-webkit-scrollbar {
    height: 10px;
  }
`;

const StyledTable = styled(motion.div)<{ isLoading: boolean }>`
  overflow: auto;
  ${scrollbarStyles};


  table {
    ${({ isLoading }) => !isLoading && `
      border-top: 1px solid #037770;
    `}
    width: 100%;
    border-spacing: 10px;
    thead {
      tr {
        background: #F3F3F3;
        border-radius: 2px;
      }
    }
  }

  th {
    padding: 10px;
  }

  td {
    text-align: center;
    padding: 20px;
    ${({ isLoading }) => isLoading && `
      background: black;
      border-radius: 5px;
    `}
  }

  tr:nth-child(even) {
    background: rgb(3,119,112, 0.03);
  }

`;

export const Table = ({
  columns, data, animate, isLoading = false,
}: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns: isLoading ? skeletonColumns : columns,
      data: isLoading ? skeletonData : data,
    },
    useSortBy,
    useColumnOrder,
  );

  const spring = React.useMemo(
    () => ({
      type: 'spring',
      damping: 50,
      stiffness: 100,
    }),
    [],
  );

  return (
    <StyledTable isLoading={isLoading}>
      <motion.table
        {...getTableProps()}
        {...(animate?.table || {})}
      >
        <thead>
          {!isLoading && headerGroups.map((headerGroup:any, i:any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: {
                getHeaderProps: (object: any) => void,
                getSortByToggleProps: () => void,
                minWidth: number,
                isSorted: number,
                isSortedDesc: number,
                render: (title: string) => string,
              }) => (
                  <th
                    {...column.getHeaderProps({
                      style: {
                        minWidth: column.minWidth,
                      },
                      layoutTransition: spring,
                    })}
                  >
                    <div {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                      <span>
                      {/* eslint-disable-next-line no-nested-ternary */}
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                    </span>
                    </div>
                  </th>
              ))}
            </tr>
          ))}
        </thead>
        <motion.tbody
         {...getTableBodyProps({})}
         {...(animate?.tbody || {})}
        >
        <AnimatePresence>
            {rows.map((row:any, i: number) => {
              prepareRow(row);
              return (
                <motion.tr
                  {...row.getRowProps({
                    exit: { opacity: 0, maxHeight: 0 },
                    layoutTransition: spring,
                  })}
                  {...(animate?.tr ? animate.tr() : {})}
                  layout
                >
                  {row.cells.map((cell:any) => (
                      <motion.td
                        {...cell.getCellProps({
                          layoutTransition: spring,
                        })}
                        {...(animate?.td ? animate.td() : {})}
                      >
                        {cell.render('Cell')}
                      </motion.td>
                  ))}
                </motion.tr>
              );
            })}
                </AnimatePresence>
        </motion.tbody>
      </motion.table>
      </StyledTable>
  );
};
