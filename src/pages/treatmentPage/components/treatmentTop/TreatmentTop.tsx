import cls from './treatmentTop.module.scss';
import Text from 'components/text/Text.tsx';
import { Button } from 'components/button/Button.tsx';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import { setAppointmentsCreateModal } from 'models/appointment/slice.ts';

export const TreatmentTop = () => {
  const dispatch = useAppDispatch();
  const handleAddTemplateAppointment = () => {
    dispatch(setAppointmentsCreateModal(true));
  };
  return (
    <div className={cls.top}>
      <Text title="Лечение" TitleTag="h1" titleFont={'title-1'}/>
      <Button text={'Создать шаблон'} onClick={handleAddTemplateAppointment}/>
    </div>
  );
};
