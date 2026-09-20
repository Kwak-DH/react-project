import Button from '@/components/Button';
import Input from '@/components/Input';
import { useUserStore } from '@/store/useUserStore';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { userName, login } = useUserStore();
  const navigate = useNavigate();
  const [loginUserName, setLoginUserName] = useState<string>('');

  useEffect(() => {
    if (userName) {
      navigate(`/home`);
    }
  }, []);

  const onLogin = () => {
    // TODO: alert -> custom modal로 변경
    if (!loginUserName) return alert('유저 이름을 입력해 주세요.');
    login(loginUserName);
    navigate(`/home`);
  };

  return (
    <div
      className={` w-full h-full bg-white flex justify-center items-center`}
      style={{ height: '100vh' }}
    >
      <div className={` w-100 h-full  flex-col gap-20 flex justify-center items-center`}>
        <Input
          placeholder="UserName"
          variant="outlined"
          value={loginUserName}
          onChange={(e) => setLoginUserName(e.target.value)}
        />
        <Button size="lg" className="w-full" onClick={onLogin}>
          LOGIN
        </Button>
      </div>
    </div>
  );
};
export default Login;
