import { Slider, SliderProps } from '@nextui-org/react';
import get from 'lodash/get';
import { Controller, FieldValues } from 'react-hook-form';

import { ControlledFormFieldProps } from './types';

export type SliderFieldProps<T extends FieldValues> =
  ControlledFormFieldProps<T> &
    Omit<SliderProps, 'name'> & {
      renderCustomValue?: (value: SliderProps['value']) => React.ReactNode;
    };

export function SliderField<T extends FieldValues>(props: SliderFieldProps<T>) {
  const { name, formState, control, renderCustomValue, ...rest } = props;
  const { errors } = formState;
  const error = get(errors, name);
  const errorText = error?.message;

  const renderErrorText = () => {
    if (errorText && typeof errorText === 'string') {
      return errorText;
    }
  };

  const handleRenderCustomValue = (
    value: SliderProps['value'],
    children: React.ReactNode
  ) => {
    if (value && renderCustomValue) {
      return renderCustomValue(value);
    }
    return children;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...fields } }) => (
        <div className="flex flex-col items-start justify-center gap-2">
          <Slider
            color={error ? 'danger' : 'primary'}
            onChange={onChange}
            renderValue={({ children, ...props }) => (
              <output {...props}>
                {handleRenderCustomValue(fields.value, children)}
              </output>
            )}
            {...rest}
            {...fields}
          />
          {errorText ? (
            <p className="text-danger text-small font-medium">
              {renderErrorText()}
            </p>
          ) : null}
        </div>
      )}
    />
  );
}
