import { Navbar } from '@material-tailwind/react';
import Typography from '../Typography';
import { useUserStore } from '@/store/useUserStore';
import Button from '../Button';

const Header = () => {
  const { userName, loginTime, logout } = useUserStore();
  return (
    <Navbar
      fullWidth
      placeholder={''}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      onResize={() => {}}
      onResizeCapture={() => {}}
      color="transparent"
      className={`p-0 m-0 h-[100px] bg-red-100 `}
    >
      <div className="w-full h-full  flex relative justify-center  items-center bg-transparent">
        <Typography variant="lhHeading4" color="black">
          가즈아
        </Typography>

        <div className="absolute bottom-[5px] px-2 flex  w-full justify-end items-center gap-[5px]">
          <Typography variant="lbStrong" color="black">
            {userName}
          </Typography>
          <Typography variant="lsNormal" color="black">
            {loginTime}
          </Typography>
          <Button variant="filled" onClick={logout}>
            LOGOUT
          </Button>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
