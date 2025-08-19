import { useSelector } from 'react-redux';
import { Modal } from 'components/modal/Modal.tsx';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import { modalPatientTreatment } from 'models/patient/selectors.ts';
import { TreatmentPatientForm } from 'pages/patientPage/components/treatmentPatientForm/TreatmentPatientForm.tsx';
import { setModalPatientTreatment } from 'models/patient/slice.ts';

interface TreatmentPatientModalProps {
  patientId: string;
}
export const TreatmentPatientModal = ({ patientId }: TreatmentPatientModalProps) => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setModalPatientTreatment(false));
  };
  const isShow = useSelector(modalPatientTreatment);
  return (
    <Modal isShow={isShow}>
      <TreatmentPatientForm patientId={patientId} onClose={handleClose} />
    </Modal>
  );
};
