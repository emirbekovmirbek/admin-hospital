import { Container } from 'components/container/Container.tsx';
import { TemplateAppointments } from 'pages/treatmentPage/components/templateAppointments/TemplateAppointments.tsx';
import { TreatmentTop } from 'pages/treatmentPage/components/treatmentTop/TreatmentTop.tsx';
import { ModalCreateAppointment } from 'pages/treatmentPage/components/modalCreateAppoinment/ModalCreateAppoinment.tsx';
import { ModalFormAppointment } from 'components/modalFormAppoinment/ModalFormAppointment.tsx';

const TreatmentPage = () => {
  return (
    <Container>
      <TreatmentTop />
      <TemplateAppointments />
      <ModalCreateAppointment />
      <ModalFormAppointment />
    </Container>
  );
};

export default TreatmentPage;
