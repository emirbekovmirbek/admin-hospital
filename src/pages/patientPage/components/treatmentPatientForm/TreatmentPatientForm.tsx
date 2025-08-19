import cls from './TreatmentPatientForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formAppointmentValidation } from './treatmentPatientValidate.ts';
import { useSelector } from 'react-redux';
import { getAllTreatmentTemplates } from 'models/appointment/selector.ts';
import { useState } from 'react';
import Select from 'components/select/Select.tsx';
import Datepicker from 'components/datePicker/Datepicker.tsx';
import { getDate, getDateToString, today } from 'utils/dayHelpers.ts';
import { Button } from 'components/button/Button.tsx';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import { ShortInfoAppointment } from 'components/shortInfoAppointment/ShortInfoAppointment.tsx';
import { useFetchTreatmentAppointmentToPatientMutation } from 'models/patient/api.ts';
import { handleNotification } from 'utils/notificationHelpers.ts';
import { errorHandler } from 'utils/errorHandler.ts';

interface TreatmentPatientFormProps {
  patientId: string;
  onClose: () => void;
}
export const TreatmentPatientForm = ({ patientId, onClose }: TreatmentPatientFormProps) => {
  const [onAppointmentTreatment, { isLoading }] = useFetchTreatmentAppointmentToPatientMutation();
  const templateTreatments = useSelector(getAllTreatmentTemplates.selectAll);
  const [templateTreatment, setTemplateTreatment] = useState<TreatmentTemplates | null>(null);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm<TreatmentPatientForm>({
    resolver: zodResolver(formAppointmentValidation),
    defaultValues: {
      patientId,
    },
  });
  const onHandleSubmit = async (values: TreatmentPatientForm) => {
    try {
      await onAppointmentTreatment(values).unwrap();
      onClose();
      handleNotification('Лечение назначено', 'success');
    } catch (error) {
      handleNotification(errorHandler(error), 'success');
    }
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className={cls.form}>
      <Select
        label={'Шаблон'}
        options={templateTreatments}
        error={errors.templateId?.message}
        value={templateTreatment}
        onChange={newValue => {
          setValue('templateId', newValue?.id ?? '', { shouldValidate: true });
          setValue('name', newValue?.name ?? '', { shouldValidate: true });
          setTemplateTreatment(newValue);
        }}
        getOptionValue={option => option.id}
        formatOptionLabel={option => option.name}
      />
      {templateTreatment?.items.map((item, idx) => (
        <ShortInfoAppointment key={item.name} {...item} idx={idx} />
      ))}
      <Controller
        control={control}
        name={'startDate'}
        render={({ field }) => (
          <Datepicker
            minDate={today}
            maxDate={getDate(watch('endDate'))}
            startDate={getDate(field.value, 'YYYY-MM-DD')}
            selected={getDate(field.value, 'YYYY-MM-DD')}
            endDate={getDate(watch('endDate'), 'YYYY-MM-DD')}
            onChange={date => {
              field.onChange(getDateToString(date, 'YYYY-MM-DD'));
            }}
            error={errors.startDate?.message}
            label={'Дата начало'}
          />
        )}
      />
      <Controller
        control={control}
        name={'endDate'}
        render={({ field }) => (
          <Datepicker
            minDate={getDate(watch('startDate')) ?? today}
            selected={getDate(field.value, 'YYYY-MM-DD')}
            startDate={getDate(watch('startDate'), 'YYYY-MM-DD')}
            endDate={getDate(field.value, 'YYYY-MM-DD')}
            onChange={date => {
              field.onChange(getDateToString(date, 'YYYY-MM-DD'));
            }}
            error={errors.startDate?.message}
            label={'Дата окончания'}
          />
        )}
      />
      <div className={cls.actions}>
        <Button type={'submit'} text={'Назначить'} width={'100%'} isLoading={isLoading} />
        <Button
          theme={ButtonTheme.ERROR}
          type={'button'}
          text={'Отменить'}
          onClick={onClose}
          width={'100%'}
        />
      </div>
    </form>
  );
};
