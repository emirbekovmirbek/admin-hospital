import cls from './otpForm.module.scss';
import {KeyboardEvent, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {NumberInput} from 'components/numberInput/NumberInput.tsx';
import {Button} from 'components/button/Button.tsx';
import Text from 'components/text/Text.tsx';
import {otpFormValidation} from './otpFormValidation.ts';
import {zodResolver} from '@hookform/resolvers/zod';
import {ButtonTheme} from "components/button/ButtonSchema.ts";

const KEYS_OF_FORM: (keyof OTPCodeForm)[] = ['digit0', 'digit1', 'digit2', 'digit3'];
const OtpForm = () => {
  const { handleSubmit, watch, setValue, formState: { errors }  } = useForm<OTPCodeForm>({
    resolver: zodResolver(otpFormValidation)
  });
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const onSubmit = (data: OTPCodeForm) => {
    const code = Object.values(data).join('');
    console.log('OTP code:', code);
  };
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const input = e.currentTarget;
    const key = e.key;
    if (key === 'Backspace') {
      if (input.value === '') {
        const prevIndex = Math.max(index - 1, 0);
        inputsRef.current[prevIndex]?.focus();
      }
      setValue(`digit${index}` as keyof OTPCodeForm, '');
    } else if (/^[0-9]$/.test(key)) {
      setValue(`digit${index}` as keyof OTPCodeForm, key, {shouldValidate: true});
      setTimeout(() => {
        inputsRef.current[index + 1]?.focus();
      },0);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
      <Text
        title="Код подтверждения"
        titleFont="title-1"
        TitleTag="h1"
        text="Мы отправили СМС код вам на номер телефона"
        textTheme="secondary"
        textFont="reg-16"
      />
      <div>
        {KEYS_OF_FORM.map((key, i) => (
          <NumberInput
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            onKeyDown={(e) => handleKeyUp(e, i)}
            maxLength={1}
            value={watch(key)}
            error={errors[key]?.message}
            secondary
          />
        ))}
      </div>
      <Button type="button" text={'Не пришёл код?'} theme={ButtonTheme.TEXT}/>
      <Button text={'Регистрация'} width="100%"/>
    </form>
  );
};

export default OtpForm;
