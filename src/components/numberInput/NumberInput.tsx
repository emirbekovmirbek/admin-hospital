import { forwardRef } from 'react';
import { CommonFormElementProps } from '../templateForm/FormElementSchema';
import TemplateFormElement from '../templateForm/TemplateFormElement';
import {
  PatternFormat,
  NumericFormat,
  type NumericFormatProps,
  type PatternFormatProps,
} from 'react-number-format';

type NumberInputProps = NumericFormatProps &
  CommonFormElementProps &
  Omit<PatternFormatProps, 'format'> & {
    format?: string;
    mask?: string;
  };
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  const { icon, type, className, secondary, label, error, required, format, mask, ...other } =
    props;
  if (format) {
    return (
      <TemplateFormElement
        icon={icon}
        label={label}
        error={error}
        className={className}
        secondary={secondary}
        required={required}
      >
        <PatternFormat
          format={format}
          mask={mask}
          type={type}
          getInputRef={ref}
          allowEmptyFormatting
          {...other}
        />
      </TemplateFormElement>
    );
  }
  return (
    <TemplateFormElement
      icon={icon}
      label={label}
      error={error}
      className={className}
      secondary={secondary}
      required={required}
    >
      <NumericFormat
        type={type}
        getInputRef={ref}
        allowLeadingZeros
        {...other}
      />
    </TemplateFormElement>
  );
});
