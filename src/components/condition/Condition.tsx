import cls from './condition.module.scss';
import classes from 'classnames';


interface ConditionProps {
  className?: string;
  amount: string;
}
export const Condition = ({className, amount}: ConditionProps) => {
  return (
    <div className={classes(cls.condition, className ?? '')}>
      <span/>
      <span>{amount}%</span>
    </div>
  );
};
