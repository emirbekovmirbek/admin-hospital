import { Container } from 'components/container/Container.tsx';
import { PatientTable } from 'pages/patientsPage/components/patientsTable/PatientTable.tsx';
import { PatientsPageTop } from 'pages/patientsPage/components/patientsPageTop/PatientsPageTop.tsx';

const PatientsPage = () => {
  return (
    <Container>
      <PatientsPageTop />
      <PatientTable />
    </Container>
  );
};

export default PatientsPage;
