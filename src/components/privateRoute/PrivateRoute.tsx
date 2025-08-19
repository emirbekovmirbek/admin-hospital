import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'models/user/selectots.ts';
import { Navigate } from 'react-router-dom';
import { routePath } from 'utils/routesHelpers.ts';

interface PrivateRouteProps {
  children: ReactNode;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = useSelector(getIsAuth);
  if (!isAuth) {
    return <Navigate to={routePath.login} />;
  }
  return children;
};
