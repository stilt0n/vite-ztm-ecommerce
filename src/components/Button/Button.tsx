import { ButtonProps } from './types';
import styles from './Button.module.scss';

const styleMap: { [key: string]: string } = {
  default: '',
  inverted: styles['inverted'],
  google: styles['google-sign-in'],
};

export const Button = ({
  buttonType,
  children,
  ...htmlButtonProps
}: ButtonProps) => {
  const buttonClassName = `${styles['button-container']} ${
    styleMap[buttonType ?? 'default']
  }`;
  return (
    <button className={buttonClassName} {...htmlButtonProps}>
      {children}
    </button>
  );
};
