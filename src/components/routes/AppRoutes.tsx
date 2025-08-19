import { Navigate, RouteObject } from 'react-router-dom';
import { routePath } from 'utils/routesHelpers.ts';
import Layout from 'layout/Layout.tsx';
import { TreatmentPageAsync } from 'pages/treatmentPage/TreatmentPage.async.tsx';
import { PatientsPageAsync } from 'pages/patientsPage/PatientsPage.async.tsx';
import { PatientPageAsync } from 'pages/patientPage/PatientPage.async.tsx';
import { LoginPageAsync } from 'pages/loginPage/LoginPage.async.tsx';
import { PublicRoute } from 'components/publicRoute/PublicRoute.tsx';
import { PrivateRoute } from 'components/privateRoute/PrivateRoute.tsx';
import { NotfoundPage } from 'pages/notfoundPage/NotfoundPage.tsx';
import { ComponentTech } from 'components/componentTech/ComponentTech.tsx';
import RegistrationPage from "pages/registrationPage/RegistrationPage.tsx";

export const AppRoutes: RouteObject[] = [
  {
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: routePath.main,
        element: <Navigate to={routePath.patients} />,
      },
      {
        path: routePath.messages,
        element: <ComponentTech />,
      },
      {
        path: routePath.treatment,
        element: <TreatmentPageAsync />,
      },
      {
        path: routePath.patients,
        children: [
          {
            index: true,
            element: <PatientsPageAsync />,
          },
          {
            path: routePath.patient,
            element: <PatientPageAsync />,
          },
        ],
      },
      { path: '*', element: <NotfoundPage/>}
    ],
  },
  {
    element: (
      <PublicRoute>
        <LoginPageAsync />
      </PublicRoute>
    ),
    path: routePath.login,
  },
  {
    element: (
      <PublicRoute>
        <RegistrationPage />
      </PublicRoute>
    ),
    path: routePath.signup,
  },
];
