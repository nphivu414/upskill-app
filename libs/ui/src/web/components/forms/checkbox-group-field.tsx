import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxProps,
} from '@nextui-org/react';
import get from 'lodash/get';
import { Controller, FieldValues } from 'react-hook-form';

import { ControlledFormFieldProps } from './types';

export type CheckboxGroupData = {
  value: CheckboxProps['value'];
  label: string;
  endContent?: React.ReactNode;
};

export type CheckboxGroupFieldProps<T extends FieldValues> =
  ControlledFormFieldProps<T> &
    Omit<CheckboxGroupProps, 'name'> & {
      data?: CheckboxGroupData[];
    };

export function CheckboxGroupField<T extends FieldValues>(
  props: CheckboxGroupFieldProps<T>
) {
  const { name, formState, control, data, ...rest } = props;
  const { errors, isValid } = formState;
  const error = get(errors, name);
  const errorText = error?.message;

  const renderErrorText = () => {
    if (errorText && typeof errorText === 'string') {
      return errorText;
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...fields } }) => (
        <CheckboxGroup
          color="primary"
          onValueChange={onChange}
          isInvalid={!isValid}
          errorMessage={renderErrorText}
          {...rest}
          {...fields}
        >
          {data?.map(({ value, label, endContent }) => (
            <Checkbox
              key={value}
              value={value}
              classNames={
                endContent
                  ? {
                      label: 'w-full',
                      base: 'inline-flex w-full max-w-full',
                    }
                  : undefined
              }
            >
              <div className="flex w-full items-center justify-between gap-2">
                {label}
                {endContent}
              </div>
            </Checkbox>
          ))}
        </CheckboxGroup>
      )}
    />
  );
}
