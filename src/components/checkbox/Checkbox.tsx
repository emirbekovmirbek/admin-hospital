import { forwardRef, InputHTMLAttributes } from 'react';
import classes from 'classnames';
import cls from './checkbox.module.css';
import {CheckboxHeight} from './checkboxSchema';


interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  height?: CheckboxHeight;
  error?: string;
}
export const Checkbox  = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    className,
    label,
    error,
    height = CheckboxHeight.M,
    ...other
  } = props;
  return (
    <label className={classes(cls.checkbox, className ?? '', [cls[height]], {[cls.error]: error})}>
      <input type="checkbox" {...other} ref={ref} />
      <span />
      {label && <p>{label}</p>}
    </label>
  );
});
