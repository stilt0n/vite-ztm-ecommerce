import { SignUpForm } from '../../components/SignUpForm';
import { SignInForm } from 'src/components/SignInForm';
import styles from './Authentication.module.scss';

export const Authentication = () => {
  return (
    <div className={styles['authentication-container']}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
