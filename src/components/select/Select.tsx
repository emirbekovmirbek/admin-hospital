import './select.css';
import ReactSelect, { Props, GroupBase } from 'react-select';
import { CommonFormElementProps } from 'components/templateForm/FormElementSchema.ts';
import TemplateFormElement from 'components/templateForm/TemplateFormElement.tsx';
import classes from 'classnames';


const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>>(props: CommonFormElementProps & Props<Option, IsMulti, Group>) => {
  const {
    label,
    error,
    className,
    secondary,
    options,
    required,
    placeholder = '',
    isDisabled,
    prefix,
    ...other
  } = props;
  return (
    <TemplateFormElement
      prefix={prefix}
      label={label}
      error={error}
      className={classes(className, 'template_select')}
      secondary={secondary}
      required={required}
    >
      <ReactSelect
        options={options}
        className={classes('app_select', {app_select_secondary: secondary}  )}
        classNamePrefix="react-select"
        unstyled={true}
        noOptionsMessage={() => 'нет данных'}
        placeholder={placeholder}
        isDisabled={isDisabled}
        {...other}
      />
    </TemplateFormElement>
  );
};

export default Select;