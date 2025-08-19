import cls from './patientShortInfo.module.scss';
import Text from 'components/text/Text.tsx';
import { DiagnoseTemplate } from 'pages/patientPage/components/diagnoseTemplate/DiagnoseTemplate.tsx';
import { getFullName } from 'utils/helpersString.ts';
import { getAgeWithLabel } from 'utils/getAgeWithLabel.ts';

interface PatientShortInfoProps {
  patientInfo: Patient
}
export const PatientShortInfo = ({
  patientInfo,
}: PatientShortInfoProps) => {
  return (
    <div className={cls.info}>
      <Text
        title={getFullName(patientInfo)}
        titleFont={'sem-b-16'}
        text={`ID: ${patientInfo.userId}`}
        textTheme={'secondary'}
      />
      <Text title={'Номер:'} titleFont={'sem-b-16'} text={patientInfo.phone} />
      <Text
        title={'Возраст:'}
        titleFont={'sem-b-16'}
        text={getAgeWithLabel(patientInfo.birthDate)}
      />
      <Text title={'Рост:'} titleFont={'sem-b-16'} text={`${patientInfo.height} см`} />
      <Text
        title={'Вес:'}
        titleFont={'sem-b-16'}
        text={`${patientInfo.weight} кг`}
      />
      <DiagnoseTemplate
        diagnosisName={patientInfo.diagnosisName}
        patientId={patientInfo.userId}
        isHasAllergy={!!patientInfo.hasAllergy}
        diagnosisId={patientInfo.diagnosisId}
      />
      <Text
        title={'Аллергия:'}
        titleFont={'sem-b-16'}
        text={patientInfo.hasAllergy ? 'Да' : 'Нет'}
      />
    </div>
  );
};
