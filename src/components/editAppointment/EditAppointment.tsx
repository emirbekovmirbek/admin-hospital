import cls from './editAppointment.module.css';
import { useState } from 'react';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import { Button } from 'components/button/Button.tsx';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import { setAllAppointments, setAppointmentsEditModal } from 'models/appointment/slice.ts';
import { ModalEditAppointment } from 'components/modalEditAppointments/ModalEditAppointment.tsx';
import { DeleteAppointment } from 'components/deleteAppoinment/DeleteAppointment.tsx';

interface EditAppointmentProps {
  items: AppointmentInfoItem[];
  title: string;
  id: string;
}
const EditAppointment = ({ items, title, id }: EditAppointmentProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();
  const handleEdit = () => {
    dispatch(setAppointmentsEditModal(true));
    setIsEdit(true);
    dispatch(setAllAppointments(items));
  };
  const onClose = () => {
    setIsEdit(false);
  };
  return (
    <div className={cls.template}>
      <Button
        theme={ButtonTheme.PRIMARY_15}
        text="Редактировать назначения"
        width={'100%'}
        onClick={handleEdit}
      />
      <DeleteAppointment id={id} />
      <ModalEditAppointment title={title} id={id} isShow={isEdit} handleClose={onClose} />
    </div>
  );
};

export default EditAppointment;
