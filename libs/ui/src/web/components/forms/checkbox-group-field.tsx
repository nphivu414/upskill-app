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
          {data?.map(({ value, label }) => (
            <Checkbox key={value} value={value}>
              {label}
            </Checkbox>
          ))}
        </CheckboxGroup>
      )}
    />
  );
}
