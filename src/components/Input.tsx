import { Input as MInput, InputProps as MInputProps } from '@material-tailwind/react';

interface InputProps extends MInputProps {
  className?: string;
}

const Input = (props: InputProps) => {
  return (
    <MInput
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      onResize={() => {}}
      onResizeCapture={() => {}}
      crossOrigin={undefined}
      {...props}
    ></MInput>
  );
};

export default Input;
