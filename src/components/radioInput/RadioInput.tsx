import cls from './radioInput.module.scss';
import {forwardRef, InputHTMLAttributes} from 'react';
import classes from 'classnames';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const RadioInput = forwardRef<HTMLInputElement,RadioInputProps >(({label, className, error, ...props}, ref) => {
  return (
    <label className={classes(cls.radio, className ?? '', {[cls.error]: error})}>
      <input type="radio" {...props} ref={ref}/>
      <span />
      {label && <p>{label}</p>}
    </label>
  );
});
