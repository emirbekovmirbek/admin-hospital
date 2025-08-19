import cls from './modalCreateAppointment.module.css';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import { useSelector } from 'react-redux';
import { getAppointmentsModalCreate } from 'models/appointment/selector.ts';
import { setAppointmentsCreateModal } from 'models/appointment/slice.ts';
import { Modal } from 'components/modal/Modal.tsx';
import { FormAppointments } from 'components/formAppoinments/FormAppointments.tsx';
import { useCreateTreatmentMutation } from 'models/appointment/api.ts';
import { handleNotification } from 'utils/notificationHelpers.ts';
import { errorHandler } from 'utils/errorHandler.ts';

export const ModalCreateAppointment = () => {
  const [create, { isLoading }] = useCreateTreatmentMutation();
  const dispatch = useAppDispatch();

  const isShow = useSelector(getAppointmentsModalCreate);
  const handleClose = () => {
    dispatch(setAppointmentsCreateModal(false));
  };
  const handleSave = async (newTreatment: TreatmentTemplatesForm) => {
    try {
      await create(newTreatment).unwrap();
      handleNotification(`Шаблон ${newTreatment.name} создан`, 'success');
      handleClose();
    } catch (e) {
      const message = errorHandler(e);
      handleNotification(message, 'error');
    }
  };
  return (
    <Modal isShow={isShow} className={cls.modal}>
      <FormAppointments isLoading={isLoading} onClose={handleClose} handleSubmit={handleSave} />
    </Modal>
  );
};
