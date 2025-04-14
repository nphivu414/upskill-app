'use client';

import { MockupBrowser } from '../../../components';
import { DataTablePage } from '../data-table-page';

export const DataTablePagePreview = () => {
  return (
    <MockupBrowser className="mx-auto w-full max-w-full resize-x">
      <DataTablePage />
    </MockupBrowser>
  );
};
