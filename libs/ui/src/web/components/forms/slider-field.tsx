import { Slider, SliderProps } from '@nextui-org/react';
import get from 'lodash/get';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';

import { ControlledFormFieldProps } from './types';

type SliderFieldProps<T extends FieldValues> = ControlledFormFieldProps<T> &
  Omit<SliderProps, 'name'>;

export function SliderField<T extends FieldValues>(props: SliderFieldProps<T>) {
  const { name, formState, control, ...rest } = props;
  const { errors } = formState;
  const error = get(errors, name);
  const errorText = error?.message;

  const renderErrorText = () => {
    if (errorText && typeof errorText === 'string') {
      return errorText;
    }
  };

  const handleOnChangeEnd = (onChange: ControllerRenderProps['onChange']) => {
    return (value: number | number[]) => {
      onChange(value);
    };
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...fields } }) => (
        <div className="flex size-full max-w-md flex-col items-start justify-center gap-2">
          <Slider
            color={error ? 'danger' : 'primary'}
            onChangeEnd={handleOnChangeEnd(onChange)}
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
