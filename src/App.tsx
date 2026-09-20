import { BrowserRouter } from 'react-router-dom';
import './index.css';
import LoadingProvider from './provider/LoadingProvider';
import { ThemeProvider } from '@material-tailwind/react';
import AppRoutes from './route/AppRoutes';
import customTheme from './styles/custom-theme';
import AuthProvider from './provider/AuthProvider';

const App = () => {
  return (
    <ThemeProvider value={customTheme}>
      <BrowserRouter basename={`/`}>
        <AppRoutes />
        <AuthProvider />
        <LoadingProvider />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
