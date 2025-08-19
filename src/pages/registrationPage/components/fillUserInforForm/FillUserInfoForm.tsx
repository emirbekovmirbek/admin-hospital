import cls from './fillUserInfoForm.module.scss';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Text from 'components/text/Text';
import {
  fillUserInfoFormValidation
} from './fillUserInfoFormValidation.ts';
import {Input} from 'components/input/Input.tsx';
import Datepicker from 'components/datePicker/Datepicker.tsx';
import {getDate, getDateToString, today} from 'utils/dayHelpers.ts';
import {Button} from 'components/button/Button.tsx';
import {Container} from 'components/container/Container.tsx';
import {Checkbox} from 'components/checkbox/Checkbox.tsx';
import {RadioInput} from 'components/radioInput/RadioInput.tsx';

const FillUserInfoForm = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FillUserInfoForm>({
    resolver: zodResolver(fillUserInfoFormValidation)
  });
  const onSubmit = (values: FillUserInfoForm) => {
    console.log(values);
  };
  console.log(errors);
  return (
    <Container className={cls.wrapper}>
      <Text
        title="Пройдите регистрацию"
        titleFont="title-1"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.inputs}>
          <Input {...register('surname')} label={'Фамилия'} secondary error={errors.surname?.message} />
          <Input {...register('name')} label={'Имя'} secondary error={errors.name?.message}/>
          <Input {...register('patronymic')} label={'Отчество'} secondary error={errors.patronymic?.message}/>
          <Controller
            control={control}
            name={'birthday'}
            render={({ field }) => (
              <Datepicker
                maxDate={today}
                selected={getDate(field.value, 'YYYY-MM-DD')}
                onChange={date => {
                  field.onChange(getDateToString(date, 'YYYY-MM-DD'));
                }}
                error={errors.birthday?.message}
                label={'День рождения'}
                secondary
              />
            )}
          />
          <div className={cls.radioInputs}>
            <Text text={'Укажите ваш пол'} textFont={'reg-16'}/>
            <div>
              <RadioInput label={'Мужской'} {...register('gender')} value="MALE" error={errors.gender?.message} />
              <RadioInput label={'Женский'} {...register('gender')} value="FEMALE" error={errors.gender?.message} />
            </div>
          </div>
          <div/>
          <Input type="password" {...register('password')} label={'Пароль'} secondary error={errors.password?.message}/>
          <Input type="password" {...register('repeatPassword')} label={'Повторите пароль'} secondary error={errors.repeatPassword?.message}/>
          <Text text="Придумайте пароль из 8 и более символов, используя латинские буквы, цифры и специальные знаки (!@#$% и др.)" textTheme="secondary"/>
        </div>
        <Checkbox {...register('agreement')} label={'Согласие на обработку личных данных'} error={errors.agreement?.message}/>
        <Button text={'Регистрация'}/>
      </form>
    </Container>
  );
};

export default FillUserInfoForm;
