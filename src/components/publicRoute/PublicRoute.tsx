import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'models/user/selectots.ts';
import { Navigate } from 'react-router-dom';
import { routePath } from 'utils/routesHelpers.ts';

interface PublicRouteProps {
  children: ReactNode;
}
export const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuth = useSelector(getIsAuth);
  if (isAuth) {
    return <Navigate to={routePath.patients} />;
  }
  return children;
};
