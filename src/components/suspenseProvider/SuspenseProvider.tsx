import { ReactNode, Suspense } from 'react';

interface SuspenseProviderProps {
  children: ReactNode;
}
const SuspenseProvider = ({ children }: SuspenseProviderProps) => {
  return <Suspense>{children}</Suspense>;
};

export default SuspenseProvider;
