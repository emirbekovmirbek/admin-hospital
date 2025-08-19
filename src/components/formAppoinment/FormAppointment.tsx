import cls from './formAppointment.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  formAppointmentValidation,
  WeekDays,
} from 'components/formAppoinment/formAppointmentValidation.ts';
import { Input } from 'components/input/Input.tsx';
import { contRegexDigit } from 'utils/contRegex.ts';
import Datepicker from 'components/datePicker/Datepicker.tsx';
import { getDateFromTime, getTimeToString } from 'utils/dayHelpers.ts';
import { useAppDispatch } from 'hooks/useAppDispatch.ts';
import Text from 'components/text/Text.tsx';
import { Button } from 'components/button/Button.tsx';
import { ButtonTheme } from 'components/button/ButtonSchema.ts';
import {
  addOneAppointment,
  setAppointmentModal,
  upDateAppointment,
} from 'models/appointment/slice.ts';
import Select from 'components/select/Select.tsx';
import { Checkbox } from 'components/checkbox/Checkbox.tsx';
import { textWeekDay } from 'utils/text.ts';
import { getAppointmentByIdx } from 'models/appointment/selector.ts';
import { CheckboxHeight } from 'components/checkbox/checkboxSchema.ts';

const MAX_COUNT_LIST = Array.from({ length: 9 }, (_, idx) => ({ value: idx + 1, label: idx + 1 }));
export const FormAppointment = () => {
  const dispatch = useAppDispatch();
  const appointment = useSelector(getAppointmentByIdx);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(formAppointmentValidation),
    defaultValues: {
      days: appointment?.days ?? [],
      count: MAX_COUNT_LIST[appointment?.times.length ? appointment?.times.length - 1 : 0],
      times: appointment?.times ?? [],
    },
  });
  const [isAllDays, setIsAllDays] = useState(appointment?.days.length === WeekDays.length);
  const handleChangeIsAllDays = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsAllDays(checked);
    if (checked) {
      setValue('days', [...WeekDays]);
      return;
    }
    setValue('days', []);
  };
  useEffect(() => {
    if (watch('days')?.length === WeekDays.length && !isAllDays) {
      setIsAllDays(true);
    } else {
      setIsAllDays(false);
    }
  }, [watch, isAllDays]);
  const handleClose = () => {
    dispatch(setAppointmentModal(false));
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onHandleSubmit = ({ count, ...data }: AppointmentInfoForm) => {
    if (appointment) {
      dispatch(upDateAppointment(data));
      return;
    }
    dispatch(addOneAppointment(data));
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className={cls.form}>
      <div className={cls.main}>
        <Text title={'Основные поля'} titleFont="sem-b-16" />
        <div>
          <Input
            defaultValue={appointment?.name}
            {...register('name')}
            label="Название"
            error={errors.name?.message}
          />
          <Input
            defaultValue={appointment?.dosage}
            {...register('dosage')}
            regex={contRegexDigit}
            label={'Дозировка мл'}
            error={errors.dosage?.message}
          />
          <Controller
            control={control}
            name={'count'}
            render={({ field }) => (
              <Select
                label={'Количество раз в день'}
                error={errors.count?.message}
                value={field.value}
                options={MAX_COUNT_LIST}
                onChange={field.onChange}
                getOptionValue={option => option.value.toString()}
                formatOptionLabel={option => option.label}
              />
            )}
          />
        </div>
      </div>
      <div className={cls.times}>
        <Text
          title={'Когда напоминаем?'}
          titleFont="sem-b-16"
          text={'Напомним за 15 минут'}
          textFont="sem-b-14"
          textTheme={'secondary'}
        />
        <div>
          {Array(watch('count')?.value || 1)
            ?.fill('')
            ?.map((_, idx) => (
              <Controller
                key={idx}
                control={control}
                name={`times.${idx}`}
                defaultValue={watch('times')?.[idx] || ''}
                render={({ field }) => (
                  <Datepicker
                    selected={getDateFromTime(field.value)}
                    onChange={date => {
                      field.onChange(getTimeToString(date));
                    }}
                    dateFormat="HH:mm"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Время"
                    error={errors.times?.[idx]?.message}
                  />
                )}
              />
            ))}
        </div>
      </div>
      <div className={cls.week}>
        <Text
          title={'В какие дни?'}
          titleFont="sem-b-16"
          text={'Выберите дни недели'}
          textFont="sem-b-14"
          textTheme={'secondary'}
        />
        <Checkbox label={'Выбрать все дни'} checked={isAllDays} onChange={handleChangeIsAllDays} />
        <div>
          {WeekDays.map(item => (
            <Checkbox
              height={CheckboxHeight.S}
              {...register('days')}
              value={item}
              key={item}
              label={textWeekDay[item]}
            />
          ))}
        </div>
      </div>
      <div className={cls.actions}>
        <Button text={'Сохранить'} width="100%" />
        <Button
          type={'button'}
          text={'Отмена'}
          theme={ButtonTheme.ERROR}
          onClick={handleClose}
          width="100%"
        />
      </div>
    </form>
  );
};
