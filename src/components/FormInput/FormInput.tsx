import { Group, Input, FormInputLabel } from './FormInput.styles';
import { FormInputProps } from './types';

const capitalized = (str: string) => str[0].toUpperCase() + str.slice(1);

const toCamelCase = (label: string) =>
  label
    .toLowerCase()
    .split(' ')
    .map((s, i) => (i !== 0 ? capitalized(s) : s))
    .join('');

export const FormInput = ({ label, ...inputProps }: FormInputProps) => {
  return (
    <Group>
      <Input {...inputProps} name={inputProps.name ?? toCamelCase(label)} />
      <FormInputLabel shrink={inputProps.value.length > 0}>
        {label}
      </FormInputLabel>
    </Group>
  );
};
