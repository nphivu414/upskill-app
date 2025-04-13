'use client';

import { MockupBrowser } from '../../../components';
import { DataTablePage } from '../data-table-page';

export const DataTablePagePreview = () => {
  return (
    <MockupBrowser className="w-full max-w-full">
      <DataTablePage />
    </MockupBrowser>
  );
};
