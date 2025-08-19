import cls from './modalFormAppointment.module.css';
import { Modal } from 'components/modal/Modal.tsx';
import { FormAppointment } from 'components/formAppoinment/FormAppointment.tsx';
import { useSelector } from 'react-redux';
import { getAppointmentModal } from 'models/appointment/selector.ts';
import CardTopTemplate from 'components/cardTopTemplate/CardTopTemplate.tsx';

export const ModalFormAppointment = () => {
  const isShow = useSelector(getAppointmentModal);
  return (
    <Modal isShow={isShow} className={cls.modal}>
      <CardTopTemplate text="Назначение" />
      <FormAppointment />
    </Modal>
  );
};
