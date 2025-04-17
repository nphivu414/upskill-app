import {
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
} from '@heroui/react';
import { Paragraph } from '@upskill-app/ui/web';
import { LayoutGroup, motion } from 'framer-motion';
import {
  ArrowLeftRight,
  ArrowUpDown,
  DivideIcon,
  Eye,
  Filter,
  MoveHorizontal,
  Pin,
} from 'lucide-react';

import { SettingSection } from './setting-section';

export const SettingSidebar = () => {
  return (
    <ScrollShadow
      size={30}
      className="bg-content1 border-l-1 border-divider max-h-full w-[300px] overflow-y-auto"
    >
      <Paragraph className="px-4 py-2 text-xl font-bold">Settings</Paragraph>
      <SettingSection
        icon={<Pin size={16} />}
        title="Column Pinning"
        description="You can pin columns to the left or right by dragging the column header
          to the desired side. The pinned columns will remain visible while
          scrolling through the table."
      >
        <div className="flex gap-2">
          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <Button variant="flat" color="primary" fullWidth>
                Pin Left
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <CheckboxGroup
                label="Select columns to pin left"
                defaultValue={['buenos-aires', 'london']}
                className="p-2"
              >
                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                <Checkbox value="sydney">Sydney</Checkbox>
                <Checkbox value="san-francisco">San Francisco</Checkbox>
                <Checkbox value="london">London</Checkbox>
                <Checkbox value="tokyo">Tokyo</Checkbox>
              </CheckboxGroup>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <Button fullWidth>Pin Right</Button>
            </PopoverTrigger>
            <PopoverContent>
              <CheckboxGroup
                label="Select columns to pin right"
                defaultValue={['buenos-aires', 'london']}
                className="p-2"
              >
                <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                <Checkbox value="sydney">Sydney</Checkbox>
                <Checkbox value="san-francisco">San Francisco</Checkbox>
                <Checkbox value="london">London</Checkbox>
                <Checkbox value="tokyo">Tokyo</Checkbox>
              </CheckboxGroup>
            </PopoverContent>
          </Popover>
        </div>
      </SettingSection>
      <Divider />
      <SettingSection
        title="Column Resizing"
        icon={<MoveHorizontal size={16} />}
        description="You can resize columns by dragging the edges of the column headers."
      />
      <Divider />
      <SettingSection
        title="Column Reordering"
        icon={<ArrowLeftRight size={16} />}
        description="You can reorder columns by dragging the column headers to the desired
          position."
      />
      <Divider />
      <SettingSection
        title="Column Visibility"
        icon={<Eye size={16} />}
        description="You can toggle the visibility of columns by checking or unchecking
          the checkboxes."
      >
        <div className="flex flex-col gap-2">
          <CheckboxGroup
            defaultValue={['buenos-aires', 'london']}
            className="p-2"
          >
            <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
            <Checkbox value="sydney">Sydney</Checkbox>
            <Checkbox value="san-francisco">San Francisco</Checkbox>
            <Checkbox value="london">London</Checkbox>
            <Checkbox value="tokyo">Tokyo</Checkbox>
          </CheckboxGroup>
          <Button variant="light" className="w-full">
            Reset to Default
          </Button>
        </div>
      </SettingSection>
      <Divider />
      <SettingSection
        title="Column Sorting"
        icon={<ArrowUpDown size={16} />}
        description="You can sort columns by clicking on the column headers. Click again
          to reverse the sort order."
      ></SettingSection>
      <Divider />
      <SettingSection
        title="Column Filtering"
        icon={<Filter size={16} />}
        description="You can filter columns by clicking on the filter icon in the column
          headers. Select the desired filter criteria and click Apply."
      ></SettingSection>
    </ScrollShadow>
  );
};
