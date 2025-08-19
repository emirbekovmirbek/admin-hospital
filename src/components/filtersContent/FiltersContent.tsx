import cls from './filtersContent.module.scss';
import { ReactNode, useState, useCallback, ElementType, ComponentProps } from 'react';
import classes from 'classnames';
import { Button } from 'components/button/Button.tsx';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import { FilterTemplate } from 'components/filterTemplate/FilterTemplate.tsx';

type FiltersContentProps<T extends ElementType> = {
  FiltersComponent: T;
  children?: ReactNode;
  handleClearFilters: () => void;
  leftElement?: ReactNode;
  className?: string;
} & Omit<ComponentProps<T>, 'onClose'>;

export const FiltersContent = <T extends ElementType>(props: FiltersContentProps<T>) => {
  const { FiltersComponent, children, handleClearFilters, leftElement, className, ...restProps } =
    props;

  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const handleToggle = useCallback(() => setIsOpenFilter(prev => !prev), []);
  const Component = FiltersComponent as ElementType<{ onClose: () => void }>;
  return (
    <>
      <div className={classes(cls.content, className ?? '')}>
        {leftElement}
        <div>
          {children}
          <Button theme={ButtonTheme.PRIMARY_15} text="Фильтры" onClick={handleToggle} />
          <Button theme={ButtonTheme.GRAY} text="Очистить фильтр" onClick={handleClearFilters} />
        </div>
      </div>
      <FilterTemplate isShow={isOpenFilter} onClose={handleToggle}>
        {isOpenFilter ? <Component onClose={handleToggle} {...restProps} /> : null}
      </FilterTemplate>
    </>
  );
};
