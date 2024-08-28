import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { ArrowDownNarrowWide } from 'lucide-react';

export const FlightSortMenu = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>();

  return (
    <Dropdown backdrop="opaque">
      <DropdownTrigger>
        <Button
          fullWidth
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<ArrowDownNarrowWide size={14} />}
        >
          Sort
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Sort flight"
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="cheapest">Cheapest</DropdownItem>
        <DropdownItem key="direct">Direct flights first</DropdownItem>
        <DropdownItem key="earliest-departure">Earliest departure</DropdownItem>
        <DropdownItem key="latest-departure">Latest departure</DropdownItem>
        <DropdownItem key="earliest-arrival">Earliest arrival</DropdownItem>
        <DropdownItem key="latest-arrival">Latest arrival</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
