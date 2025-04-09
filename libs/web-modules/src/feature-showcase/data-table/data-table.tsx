'use client';

import React, { CSSProperties } from 'react';
import {
  Column,
  ColumnDef,
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@upskill-app/ui/web';

import mockEmployees from './mock-data';
import { Employee } from './types';

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'id',
    header: 'Employee ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'annualSalary',
    header: 'Annual Salary',
  },
  {
    accessorKey: 'dateOfJoining',
    header: 'Date of Joining',
  },
  {
    accessorKey: 'hireType',
    header: 'Hire Type',
  },
  {
    accessorKey: 'contractType',
    header: 'Contract Type',
  },
  {
    accessorKey: 'contractEndDate',
    header: 'Contract End Date',
  },
  {
    accessorKey: 'probationEndDate',
    header: 'Probation End Date',
  },
  {
    accessorKey: 'manager.name',
    header: 'Manager Name',
  },
];

export const DataTable = () => {
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
    left: ['name'],
    right: [''],
  });

  const getCommonPinningStyles = (column: Column<Employee>): CSSProperties => {
    const isPinned = column.getIsPinned();
    const isLastLeftPinnedColumn =
      isPinned === 'left' && column.getIsLastColumn('left');
    const isFirstRightPinnedColumn =
      isPinned === 'right' && column.getIsFirstColumn('right');

    return {
      boxShadow: isLastLeftPinnedColumn
        ? '-4px 0 4px -4px gray inset'
        : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
      left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
      right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
      opacity: isPinned ? 0.95 : 1,
      position: isPinned ? 'sticky' : 'relative',
      width: column.getSize(),
      zIndex: isPinned ? 1 : 0,
      backgroundColor: isPinned ? 'Background' : 'transparent',
    };
  };

  const table = useReactTable({
    data: mockEmployees,
    state: {
      columnPinning,
    },
    onColumnPinningChange: setColumnPinning,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table className="!border-separate border-spacing-0 p-4">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const { column } = header;
                return (
                  <TableHead
                    key={header.id}
                    style={{ ...getCommonPinningStyles(column) }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => {
                  const { column } = cell;
                  return (
                    <TableCell
                      key={cell.id}
                      style={{ ...getCommonPinningStyles(column) }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
