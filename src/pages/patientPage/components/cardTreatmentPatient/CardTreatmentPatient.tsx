import { CardAppointment } from 'components/cardAppoinment/CardAppointment.tsx';
import { useSelector } from 'react-redux';
import { getTreatmentTemplatesById } from 'models/appointment/selector.ts';

interface CardTreatmentPatientProps {
  idTreatment: string;
}
const CardTreatmentPatient = ({ idTreatment }: CardTreatmentPatientProps) => {
  const treatment = useSelector(getTreatmentTemplatesById(idTreatment!));
  return <CardAppointment id={treatment.id} name={treatment.name} items={treatment.items} />;
};

export default CardTreatmentPatient;
