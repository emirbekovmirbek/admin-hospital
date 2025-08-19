const enum AppRoutes {
  MAIN = 'main',
  MESSAGES = 'messages',
  PATIENTS = 'patients',
  PATIENT = 'patient',
  TREATMENT = 'treatment',
  SETTING = 'setting',
  LOGIN = 'login',
  SIGNUP = 'signup',
}
export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MESSAGES]: '/messages',
  [AppRoutes.TREATMENT]: '/treatment',
  [AppRoutes.PATIENTS]: '/patients',
  [AppRoutes.PATIENT]: '/patients/:id',
  [AppRoutes.SETTING]: '/setting',
  [AppRoutes.LOGIN]: '/sign-in',
  [AppRoutes.SIGNUP]: '/sign-up',
};
