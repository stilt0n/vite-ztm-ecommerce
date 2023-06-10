import { ChangeEvent, FormEventHandler, useState } from 'react';
import {
  signInVanilla,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase';
import { Button } from '../Button';
import { FormInput } from '../FormInput';
import { getErrorCode, getErrorMessage } from 'src/utils/errorHandling';
import styles from './SignInForm.module.scss';

const onGoogleSignIn = async () => {
  const { user } = await signInWithGooglePopup();
  createUserDocumentFromAuth(user);
};

const defaultFormFields = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      await signInVanilla(email, password);
      // do something with user?
      setFormFields(defaultFormFields);
    } catch (e) {
      if (
        getErrorCode(e) === 'auth/wrong-password' ||
        getErrorCode(e) === 'auth/user-not-found'
      ) {
        alert('incorrect password or email');
      }
      console.error(getErrorMessage(e));
    }
  };
  return (
    <div className={styles['sign-in-container']}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label="email"
          type="email"
          value={email}
          required
          onChange={onInputChange}
        />
        <FormInput
          label="password"
          type="password"
          value={password}
          required
          onChange={onInputChange}
        />
        <div className={styles['buttons-container']}>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={onGoogleSignIn}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};
