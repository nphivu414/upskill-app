import { ColumnDef } from '@tanstack/react-table';

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
