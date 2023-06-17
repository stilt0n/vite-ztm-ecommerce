import { ButtonProps, StyledButton } from './types';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './Button.styles';

const styleMap: { [key: string]: StyledButton } = {
  default: BaseButton,
  inverted: InvertedButton,
  google: GoogleSignInButton,
};

export const Button = ({
  buttonType,
  children,
  ...htmlButtonProps
}: ButtonProps) => {
  const Button = styleMap[buttonType ?? 'default'];
  return <Button {...htmlButtonProps}>{children}</Button>;
};
