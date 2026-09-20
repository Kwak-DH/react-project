import { useEffect } from 'react';
import { useLoadingStore } from '../store/useLoadingStore';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';

const AuthProvider = () => {
  const { userName } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');

    if (userName && path === 'login') navigate('/home');
    else if (!userName && path !== 'login') navigate('/login');
  }, [location, userName]);

  return <></>;
};

export default AuthProvider;
