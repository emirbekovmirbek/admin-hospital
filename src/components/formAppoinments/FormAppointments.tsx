import cls from './formAppointments.module.css';
import CardTopTemplate from 'components/cardTopTemplate/CardTopTemplate.tsx';
import { Button } from 'components/button/Button.tsx';
import { Input } from 'components/input/Input.tsx';
import { ShortInfoAppointment } from 'components/shortInfoAppointment/ShortInfoAppointment.tsx';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAppointments, getAppointmentsLength } from 'models/appointment/selector.ts';
import { setAppointmentModal } from 'models/appointment/slice.ts';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import { decodeJwt } from 'utils/decodeJwt.ts';

interface FormAppointmentsProps {
  title?: string;
  onClose: () => void;
  handleSubmit: (treatment: TreatmentTemplatesForm) => void;
  isLoading?: boolean;
}
export const FormAppointments = ({
  title,
  onClose,
  handleSubmit,
  isLoading,
}: FormAppointmentsProps) => {
  const dispatch = useAppDispatch();
  const [textTemplate, setTextTemplate] = useState(title ?? '');
  const appointments = useSelector(getAppointments);
  const lengthOfAppointments = useSelector(getAppointmentsLength);
  const handleAddAppointment = () => {
    dispatch(setAppointmentModal(true));
  };
  const handleSave = () => {
    const treatment: TreatmentTemplatesForm = {
      items: appointments,
      name: textTemplate,
      createdBy: decodeJwt().userId,
    };
    handleSubmit(treatment);
  };
  const handleChangeTextTemplate = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTextTemplate(value);
  };
  return (
    <>
      <CardTopTemplate text={textTemplate} />
      <Button className={cls.button} small text={'Добавить'} onClick={handleAddAppointment} />
      {title === undefined ? (
        <Input
          label={'Название шаблона'}
          className={cls.input}
          onChange={handleChangeTextTemplate}
          value={textTemplate}
        />
      ) : null}
      {appointments.map((appointment, idx) => (
        <ShortInfoAppointment {...appointment} typeMethod="update" key={idx} idx={idx} />
      ))}
      <div className={cls.actions}>
        <Button
          width="100%"
          text="Сохранить"
          onClick={handleSave}
          disabled={!textTemplate || lengthOfAppointments === 0}
          isLoading={isLoading}
        />
        <Button theme={ButtonTheme.ERROR} width="100%" text="Отмена" onClick={onClose} />
      </div>
    </>
  );
};
