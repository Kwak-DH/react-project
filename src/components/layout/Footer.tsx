import Typography from '../Typography';

const Footer = () => {
  return (
    <>
      <div className="w-full h-[50px]  bg-red-100 flex gap-[8px] justify-center items-center">
        <Typography variant="lbNormal" color="Gray/Gray5">
          만든 이 :
        </Typography>
        <Typography variant="lbStrong" color="Gray/Gray6">
          곽대훈 (feat: 조연희, 김가현)
        </Typography>
      </div>
    </>
  );
};

export default Footer;
