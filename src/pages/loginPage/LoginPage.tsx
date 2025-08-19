import cls from './loginPage.module.scss';
import { FormLogin } from 'pages/loginPage/components/formLogin/FormLogin.tsx';
import { Container } from 'components/container/Container.tsx';

const LoginPage = () => {
  return (
    <Container className={cls.page}>
      <FormLogin />
    </Container>
  );
};

export default LoginPage;
