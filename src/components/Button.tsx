import { Button as MButton, ButtonProps as MButtonProps } from '@material-tailwind/react';
import { ReactNode } from 'react';
import Typography from './Typography';

interface ButtonProps extends MButtonProps {}
const Button = ({ children, size, ...props }: ButtonProps) => {
  return (
    <MButton
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      onResize={() => {}}
      onResizeCapture={() => {}}
      {...props}
    >
      <Typography
        variant={size === 'lg' ? 'llStrong' : size === 'sm' ? 'lsStrong' : 'lbStrong'}
        className="text-black"
      >
        {children}
      </Typography>
    </MButton>
  );
};
export default Button;
