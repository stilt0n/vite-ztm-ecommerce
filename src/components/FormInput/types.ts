import { ChangeEvent } from 'react';

export interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  name?: string;
}
