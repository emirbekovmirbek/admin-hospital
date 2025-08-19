import { ReactNode } from 'react';
import { IconsPath } from 'components/icon/iconSchema.ts';

export interface CommonFormElementProps {
  className?: string;
  label?: string;
  error?: string;
  icon?: IconsPath;
  prefix?: CommonElementPrefixIcon;
  secondary?: boolean;
  children?: ReactNode;
  required?: boolean;
}
export const enum CommonElementPrefixIcon {
  PRE = 'pre',
  POST = 'post',
}
