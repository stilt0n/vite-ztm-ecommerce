import { ChangeEvent, FormEventHandler, useState } from 'react';
import { FormInput } from '../FormInput';
import { Button } from '../Button';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase';
import { getErrorCode, getErrorMessage } from '../../utils/errorHandling';
import styles from './SignUpForm.module.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match!');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth({ ...user, displayName });
      setFormFields(defaultFormFields);
    } catch (e) {
      if (getErrorCode(e) === 'auth/email-already-in-user') {
        alert('failed because email is already in use');
      }
      console.error(getErrorMessage(e));
    }
  };

  return (
    <div className={styles['sign-up-container']}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          value={displayName}
          onChange={onInputChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={onInputChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={onInputChange}
          required
          minLength={6}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={onInputChange}
          required
          minLength={6}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
