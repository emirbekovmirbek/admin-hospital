import cls from './diagnoseTemplate.module.scss';
import { useState } from 'react';
import { Input } from 'components/input/Input.tsx';
import Text from 'components/text/Text.tsx';
import { Button } from 'components/button/Button.tsx';
import { IconsPath } from 'components/icon/iconSchema.ts';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import {
  useChangePatientDiagnosesMutation,
  usePostPatientDiagnosesMutation,
} from 'models/patient/api.ts';
import { Checkbox } from 'components/checkbox/Checkbox.tsx';
import { handleNotification } from 'utils/notificationHelpers.ts';
import { errorHandler } from 'utils/errorHandler.ts';
import Icon from 'components/icon/Icon.tsx';

interface DiagnoseTemplateProps {
  diagnosisName?: string | null;
  patientId: string;
  isHasAllergy: boolean;
  diagnosisId?: string | null;
}
export const DiagnoseTemplate = ({
  diagnosisName,
  isHasAllergy,
  patientId,
  diagnosisId,
}: DiagnoseTemplateProps) => {
  const [isEdit, setEdit] = useState(!diagnosisName);
  const [hasAllergy, setHasAllergy] = useState(isHasAllergy);
  const [diagnose, setDiagnosisName] = useState(diagnosisName ?? '');
  const [create, { isLoading }] = usePostPatientDiagnosesMutation();
  const [change, { isLoading: isLoadingChange }] = useChangePatientDiagnosesMutation();
  const handleToggleHasAllergy = () => {
    setHasAllergy(prev => !prev);
  };
  const onSave = async () => {
    try {
      if (diagnosisId) {
        const diagnosisForm: DiagnosesFormChange = {
          description: diagnose,
          diagnosisId: diagnosisId,
          hasAllergy,
        };
        await change(diagnosisForm).unwrap();
        handleNotification('Диагноз изменен', 'success');
      } else {
        const diagnosisForm: PatientDiagnosesForm = {
          description: diagnose,
          patientId,
          hasAllergy,
        };
        await create(diagnosisForm).unwrap();
        handleNotification('Диагноз поставлен', 'success');
      }
      setEdit(false);
    } catch (error) {
      handleNotification(errorHandler(error), 'error');
    }
  };
  if (isEdit) {
    return (
      <>
        <div className={cls.inputs}>
          <Input
            onChange={e => setDiagnosisName(e.target.value)}
            value={diagnose}
            secondary
            label={'Диагноз'}
          />
          <Checkbox label={'Аллергия'} onChange={handleToggleHasAllergy} checked={hasAllergy} />
        </div>
        <div className={cls.actions}>
          <Button
            theme={ButtonTheme.PRIMARY_15}
            icon={IconsPath.DONE_ICON}
            small
            disabled={!isEdit}
            onClick={onSave}
            isLoading={isLoadingChange || isLoading}
          />
          <Button
            theme={ButtonTheme.ERROR}
            icon={IconsPath.CLOSE_ICON}
            small
            disabled={!diagnosisName}
            onClick={() => setEdit(false)}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Text title={'Диагноз:'} titleFont={'sem-b-16'} />
      <div className={cls.info}>
        <Text text={diagnosisName ?? '-'} />
        <Icon pathIcon={IconsPath.PENCIL_ICON} onClick={() => setEdit(true)} />
      </div>
    </>
  );
};
