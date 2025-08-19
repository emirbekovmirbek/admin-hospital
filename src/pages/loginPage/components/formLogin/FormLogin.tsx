import cls from './formLogin.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formAppointmentValidation } from './validationFormLogin.ts';
import { Input } from 'components/input/Input.tsx';
import { NumberInput } from 'components/numberInput/NumberInput.tsx';
import Text from 'components/text/Text.tsx';
import { Button } from 'components/button/Button.tsx';
import { useFetchAuthMutation } from 'models/user/api.ts';
import { errorHandler } from 'utils/errorHandler.ts';
import { handleNotification } from 'utils/notificationHelpers.ts';

export const FormLogin = () => {
  const [fetchAuth, { isLoading }] = useFetchAuthMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(formAppointmentValidation),
  });
  const handleAuth = async ({ phone, password }: LoginType) => {
    try {
      await fetchAuth({
        phone: `996${phone}`,
        password,
      }).unwrap();
      handleNotification('Добро пожаловать!', 'success');
    } catch (e) {
      const message = errorHandler(e);
      handleNotification(message, 'error');
    }
  };
  return (
    <form onSubmit={handleSubmit(handleAuth)} className={cls.form}>
      <Text title={'Авторизация'} titleFont={'title-1'} TitleTag={'h3'} />
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
          />
        )}
      />
      <Input
        type={'password'}
        {...register('password')}
        label="Пароль"
        error={errors.password?.message}
      />
      <Button text={'Войти'} isLoading={isLoading} />
    </form>
  );
};
