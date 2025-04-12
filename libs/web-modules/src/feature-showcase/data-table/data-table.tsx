'use client';

import React, { CSSProperties } from 'react';
import {
  Column,
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  cn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@upskill-app/ui/web';

import mockEmployees from './mock-data';
import { Employee } from './types';
import { columns } from './utils';

import './table.css';

import { MockupBrowser } from 'libs/tutorial-elements/src/lib/components';

export const DataTable = () => {
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
    left: ['name'],
    right: [''],
  });
  const [columnResizeMode] = React.useState<'onChange' | 'onEnd' | undefined>(
    'onChange'
  );

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
    columns,
    data: mockEmployees,
    state: {
      columnPinning,
    },
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      size: 150,
      minSize: 50,
      maxSize: 500,
    },
    columnResizeMode,
    columnResizeDirection: 'ltr',
  });

  return (
    <div>
      <MockupBrowser className="w-full max-w-full">
        <div className="max-h-[500px] overflow-auto">
          <Table
            className="!border-separate border-spacing-0"
            style={{
              width: table.getCenterTotalSize(),
            }}
          >
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const { column } = header;
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        className="group"
                        style={{
                          ...getCommonPinningStyles(column),
                          width: header.getSize(),
                        }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        <div
                          className={cn(
                            'bg-divider absolute top-0 h-full w-1 cursor-col-resize touch-none select-none opacity-0 group-hover:opacity-100',
                            {
                              'right-0':
                                table.options.columnResizeDirection === 'ltr',
                              'left-0':
                                table.options.columnResizeDirection === 'rtl',
                              'bg-divider opacity-100':
                                header.column.getIsResizing(),
                            }
                          )}
                          onDoubleClick={() => header.column.resetSize()}
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          {...{
                            style: {
                              transform:
                                columnResizeMode === 'onEnd' &&
                                header.column.getIsResizing()
                                  ? `translateX(${
                                      (table.options.columnResizeDirection ===
                                      'rtl'
                                        ? -1
                                        : 1) *
                                      (table.getState().columnSizingInfo
                                        .deltaOffset ?? 0)
                                    }px)`
                                  : '',
                            },
                          }}
                        />
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
                          style={{
                            ...getCommonPinningStyles(column),
                            width: cell.column.getSize(),
                          }}
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
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </MockupBrowser>
    </div>
  );
};
