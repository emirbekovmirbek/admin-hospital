import cls from './phoneForm.module.scss';
import {Controller, useForm} from 'react-hook-form';
import Text from 'components/text/Text';
import {phoneFormValidation} from './phoneFormValidation.ts';
import {zodResolver} from '@hookform/resolvers/zod';
import {NumberInput} from 'components/numberInput/NumberInput.tsx';
import {Button} from 'components/button/Button.tsx';
import {handleNotification} from 'utils/notificationHelpers.ts';


const PhoneForm = () => {
  const {control, formState: {errors}, handleSubmit} = useForm({
    resolver: zodResolver(phoneFormValidation),
  });
  const onHandleSubmit = (value: Omit<LoginType, 'password'>) => {
    console.log(value);
    handleNotification('На номер отправлен код', 'success');
  };
  return (
    <form className={cls.form} onSubmit={handleSubmit(onHandleSubmit)}>
      <Text title="Добро пожаловать!" titleFont="title-1" TitleTag="h1" text="Введите номер телефона чтобы получить СМС код для регистрации" textTheme="secondary" textFont="reg-16" />
      <Controller
        control={control}
        name={'phone'}
        render={({ field }) => (
          <NumberInput
            value={field.value}
            onValueChange={values => {
              field.onChange(values.value);
            }}
            format={'996 ### ## ## ##'}
            label="Номер телефона"
            error={errors.phone?.message}
            secondary
          />
        )}
      />
      <Button text={'Отправить'} width={'100%'}/>
    </form>
  );
};

export default PhoneForm;
