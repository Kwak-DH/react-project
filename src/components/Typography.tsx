/* eslint-disable @typescript-eslint/no-explicit-any */

import { CustomColorKeys } from '@/styles/custom-colors';
import { ReactNode } from 'react';

export type variant =
  | 'lhHeading5'
  | 'lhHeading4'
  | 'lhHeading3'
  | 'lhHeading2'
  | 'lhNormal'
  | 'lbNormal'
  | 'lbStrong'
  | 'lbMedium'
  | 'lsNormal'
  | 'lsStrong'
  | 'llNormal'
  | 'llStrong'
  | 'default'
  | 'title';

interface Props {
  variant: variant;
  className?: string;
  color?: CustomColorKeys;
  style?: any;
  children: ReactNode;
}
const Typography = ({ variant, className, color, style, children = '', ...props }: Props) => {
  return (
    <p
      {...props}
      className={`m-0 p-0 ${variants[variant]} ${color ? `text-${color}` : 'text-colorText'} ${className ? className : ''}`}
      style={{ margin: 0, ...style }}
    >
      {children}
    </p>
  );
};

export const variants = {
  lhHeading5: 'text-16 font-semibold leading-[23px]',
  lhHeading4: 'text-20 font-semibold leading-[28px]',
  lhHeading3: 'text-24 font-semibold leading-[32px]',
  lhHeading2: 'text-32 font-medium leading-[32px]',
  lhNormal: 'text-18 font-normal leading-[23px]',
  lbNormal: 'text-14 font-normal leading-[22px]',
  lbStrong: 'text-14 font-semibold leading-[22px]',
  lbMedium: 'text-14 font-medium leading-[22px]',
  lsNormal: 'text-12 font-normal leading-[20px]',
  lsStrong: 'text-12 font-semibold leading-[20px]',
  llStrong: 'text-16 font-semibold leading-[24px]',
  llNormal: 'text-16 font-normal leading-[24px]',
  default: 'text-14 font-normal leading-[22px]',
  title: 'text-16 font-bold leading-[19.09px]',
};

export default Typography;
