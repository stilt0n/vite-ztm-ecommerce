import { FormInputProps } from './types';
import styles from './FormInput.module.scss';

const capitalized = (str: string) => str[0].toUpperCase() + str.slice(1);

const toCamelCase = (label: string) =>
  label
    .toLowerCase()
    .split(' ')
    .map((s, i) => (i !== 0 ? capitalized(s) : s))
    .join('');

const getLabelStyle = (length: number) =>
  `${length ? styles['shrink'] : ''} ${styles['form-input-label']}`;

export const FormInput = ({ label, ...inputProps }: FormInputProps) => {
  return (
    <div className={styles['group']}>
      <input
        className={styles['form-input']}
        {...inputProps}
        name={inputProps.name ?? toCamelCase(label)}
      />
      <label className={getLabelStyle(inputProps.value.length)}>{label}</label>
    </div>
  );
};
