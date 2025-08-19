import cls from './modalEditAppointments.module.css';
import { Modal } from 'components/modal/Modal.tsx';
import { FormAppointments } from 'components/formAppoinments/FormAppointments.tsx';
import { useEditTreatmentMutation } from 'models/appointment/api.ts';
import { handleNotification } from 'utils/notificationHelpers.ts';
import { errorHandler } from 'utils/errorHandler.ts';

interface ModalEditAppointmentProps {
  title: string;
  id: string;
  isShow: boolean;
  handleClose: () => void;
}
export const ModalEditAppointment = ({
  title,
  id,
  isShow,
  handleClose,
}: ModalEditAppointmentProps) => {
  const [editTreatment, { isLoading }] = useEditTreatmentMutation();
  const handleSave = async (editTreatments: TreatmentTemplatesForm) => {
    try {
      await editTreatment({
        id,
        ...editTreatments,
      });
      handleNotification(`${title} шаблон изменен`, 'success');
      handleClose();
    } catch (error) {
      handleNotification(errorHandler(error), 'error');
    }
  };
  return (
    <Modal isShow={isShow} className={cls.modal}>
      <FormAppointments
        title={title}
        onClose={handleClose}
        handleSubmit={handleSave}
        isLoading={isLoading}
      />
    </Modal>
  );
};
