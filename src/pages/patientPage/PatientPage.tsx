import cls from './patientPage.module.css';
import { Container } from 'components/container/Container.tsx';
import { TopPatientPage } from 'pages/patientPage/components/topPatientPage/TopPatientPage.tsx';
import { PatientShortInfo } from 'pages/patientPage/components/topPatientPage/patientShortInfo/PatientShortInfo.tsx';
// import { CardIndicator } from 'pages/patientPage/components/cardIndicator/CardIndicator.tsx';
import ChartPatient from 'pages/patientPage/components/chartPatient/ChartPatient.tsx';
import { Navigate, useParams } from 'react-router-dom';
import { useFetchPatientByIdQuery } from 'models/patient/api.ts';
import { routePath } from 'utils/routesHelpers.ts';
import { Loader } from 'components/loader/Loader.tsx';
import CardTreatmentPatient from 'pages/patientPage/components/cardTreatmentPatient/CardTreatmentPatient.tsx';
import { CardNotFound } from 'components/cardNotFound/CardNotFound.tsx';
import { TreatmentPatientModal } from 'pages/patientPage/components/treatmentPatienModal/TreatmentPatientModal.tsx';
import { ModalFormAppointment } from 'components/modalFormAppoinment/ModalFormAppointment.tsx';

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useFetchPatientByIdQuery(id!);
  if (isError) {
    return <Navigate to={routePath.patients} />;
  }
  if (isLoading) {
    return <Loader isShow={true} isPageLoader />;
  }
  return (
    <Container>
      <TopPatientPage idTreatment={data?.data.treatmentTemplateId} />
      <PatientShortInfo patientInfo={data!.data} />
      <div className={cls.list}>
        <ChartPatient id={data!.data.userId} />
        {/*{data?.data.treatmentTemplateId ? (*/}
        {/*  <CardIndicator id={data!.data.userId} idTreatment={data!.data.treatmentTemplateId} />*/}
        {/*) : (*/}
        {/*  <CardNotFound notFoundText={'Нет'} text="Показатели" />*/}
        {/*)}*/}
        {data?.data.treatmentTemplateId ? (
          <CardTreatmentPatient idTreatment={data!.data.treatmentTemplateId} />
        ) : (
          <CardNotFound notFoundText={'Нет'} text="Назначения" />
        )}
      </div>
      <TreatmentPatientModal patientId={id!} />
      <ModalFormAppointment />
    </Container>
  );
};

export default PatientPage;
