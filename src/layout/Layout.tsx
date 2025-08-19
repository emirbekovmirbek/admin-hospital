import cls from './layout.module.scss';
import { Sidebar } from 'components/sidebar/Sidebar.tsx';
import SuspenseProvider from 'components/suspenseProvider/SuspenseProvider.tsx';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/Header.tsx';
import { useFetchTreatmentsQuery } from 'models/appointment/api.ts';
import { Loader } from 'components/loader/Loader.tsx';

const Layout = () => {
  const { isLoading } = useFetchTreatmentsQuery();
  return (
    <div className={cls.layout}>
      <Sidebar />
      <div />
      <div>
        <Header />
        <SuspenseProvider>
          {isLoading ? <Loader isShow={true} isPageLoader /> : <Outlet />}
        </SuspenseProvider>
      </div>
    </div>
  );
};

export default Layout;
