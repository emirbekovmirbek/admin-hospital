import cls from './filterButton.module.scss';
import classes from 'classnames';
import { Button } from 'components/button/Button.tsx';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';

interface FilterButtonProps {
  text: string;
  isActive: boolean;
  onClick?: () => void;
}
export const FilterButton = ({ text, isActive, onClick }: FilterButtonProps) => {
  return (
    <Button
      theme={ButtonTheme.GRAY}
      className={classes(cls.filter, { [cls.active]: isActive })}
      onClick={onClick}
      text={text}
    />
  );
};
