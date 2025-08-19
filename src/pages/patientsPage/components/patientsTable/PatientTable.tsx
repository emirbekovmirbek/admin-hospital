import { ColumnsType } from 'rc-table';
import { TableComponent } from 'components/table/TableComponent.tsx';
// import { Condition } from 'components/condition/Condition.tsx';
import TextAccordion from 'components/textAccordion/TextAccordion.tsx';
import { ActionsTable } from '../actionsTable/ActionsTable.tsx';
import { useFetchPatientsQuery } from 'models/patient/api.ts';
import { Loader } from 'components/loader/Loader.tsx';
import { getAge } from 'utils/dayHelpers.ts';
import { getFullName } from 'utils/helpersString.ts';

const columns: ColumnsType<Patient> = [
  // {
  //   title: 'Статус',
  //   dataIndex: 'id',
  //   key: 'id',
  //   render: (text: string) => <Condition amount={text} />,
  // },
  {
    title: 'ФИО',
    dataIndex: 'x',
    key: 'x',
    render: (_, record) => getFullName(record),
  },
  {
    title: 'Лечение',
    dataIndex: 'treatmentTemplateName',
    key: 'treatmentTemplateName',
    render: (text: string) => text ?? '-',
  },
  {
    title: 'Возраст',
    dataIndex: 'birthDate',
    key: 'birthDate',
    render: (birthDate: string) => getAge(birthDate),
  },
  {
    title: 'Диагноз',
    dataIndex: 'diagnosisName',
    key: 'diagnosisName',
    render: (text: string) => <TextAccordion text={text ?? '-'} />,
    width: 486,
  },
  {
    dataIndex: 'userId',
    key: 'userId',
    render: (id: string) => <ActionsTable id={id} />,
    width: 100
  },
];
export const PatientTable = () => {
  const { data, isFetching } = useFetchPatientsQuery(null, {refetchOnMountOrArgChange: true});
  return (
    <>
      <Loader isShow={isFetching} isPageLoader position={'fixed'} />
      <TableComponent tableLayout={'fixed'} columns={columns} data={data?.data ?? []} rowKey="userId" />
    </>
  );
};
