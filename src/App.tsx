import { useRoutes } from 'react-router-dom';
import { AppRoutes } from 'components/routes/AppRoutes.tsx';

function App() {
  return useRoutes(AppRoutes);
}

export default App;
