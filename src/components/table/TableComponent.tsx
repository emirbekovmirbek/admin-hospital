import cls from './table.module.scss';
import RcTable, { type TableProps } from 'rc-table';
import classes from 'classnames';

export const TableComponent = (props: TableProps) => {
  const { className, emptyText = 'нет данных ', ...otherProps } = props;
  return (
    <RcTable
      className={classes(cls.my_table, className ?? '')}
      emptyText={emptyText}
      {...otherProps}
    />
  );
};
