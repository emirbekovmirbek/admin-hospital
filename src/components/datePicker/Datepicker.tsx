import './datepicker.css';
import { ru } from 'date-fns/locale/ru';
import ReactDatePicker, { DatePickerProps } from 'react-datepicker';
import type { CommonFormElementProps } from 'components/templateForm/FormElementSchema.ts';
import TemplateFormElement from 'components/templateForm/TemplateFormElement.tsx';


type ReactDatePickerProps = DatePickerProps & CommonFormElementProps & {
  range?: boolean,
};

const Datepicker = (props: ReactDatePickerProps) => {
  const {
    className,
    label= '',
    error = '',
    secondary,
    icon,
    required,
    ...other
  } = props;
  return (
    <TemplateFormElement
      error={error}
      label={label}
      className={className}
      secondary={secondary}
      icon={icon}
      required={required}
    >
      <ReactDatePicker
        locale={ru}
        dateFormat={'dd.MM.yyyy'}
        calendarClassName={'custom-calendar'}
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        {...other} />
    </TemplateFormElement>
  );
};

export default Datepicker;