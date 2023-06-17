import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

export type ButtonType = 'google' | 'inverted' | 'default';

type BaseButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'className'
>;

// I generally try to avoid FC but styled-components doesn't make typing easy
export type StyledButton = FC<BaseButtonProps>;

export interface ButtonProps extends BaseButtonProps {
  buttonType?: ButtonType;
}
