import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonType = 'google' | 'inverted' | 'default';

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'className'
  > {
  buttonType?: ButtonType;
}
