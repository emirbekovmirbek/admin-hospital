import cls from './shortInfoAppointment.module.scss';
import classes from 'classnames';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import Text from 'components/text/Text.tsx';
import { Button } from 'components/button/Button.tsx';
import { ButtonTextPosition, ButtonTheme } from 'components/button/ButtonSchema.ts';
import { removeOneAppointment, setAppointmentId } from 'models/appointment/slice.ts';

interface ShortInfoAppointmentProps extends AppointmentInfoItem {
  typeMethod?: TypeMethod;
  idx: number;
}
export const ShortInfoAppointment = ({
  idx,
  name,
  dosage,
  times,
  typeMethod,
}: ShortInfoAppointmentProps) => {
  const dispatch = useAppDispatch();
  const handleEdit = () => {
    dispatch(setAppointmentId(idx));
  };
  const handleDelete = () => {
    dispatch(removeOneAppointment(idx));
  };
  return (
    <div className={cls.wrapper}>
      <div>
        <Text text={dosage} title={name} titleFont={'reg-18'} textTheme={'secondary'} />
      </div>
      <div className={cls.times}>
        {times.map((time, i) => (
          <p key={i} className={classes(cls.time, { [cls.fist]: i === 0 })}>
            {time}
          </p>
        ))}
      </div>
      <div className={classes(cls.actions, { [cls.hidden]: typeMethod !== 'update' })}>
        <Button
          small
          theme={ButtonTheme.SECONDARY}
          text={'Редактировать'}
          width={'100%'}
          textPosition={ButtonTextPosition.center}
          onClick={handleEdit}
        />
        <Button
          small
          theme={ButtonTheme.ERROR}
          text={'Удалить'}
          width={'100%'}
          textPosition={ButtonTextPosition.center}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};
