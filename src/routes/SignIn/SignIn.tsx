import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase';
import { Button } from '../../components/Button';
import { SignUpForm } from '../../components/SignUpForm';

const handlePopupSignIn = async () => {
  const { user } = await signInWithGooglePopup();
  createUserDocumentFromAuth(user);
};

export const SignIn = () => {
  return (
    <div>
      <Button buttonType="google" onClick={handlePopupSignIn}>
        Sign in with Google Popup
      </Button>
      <SignUpForm />
    </div>
  );
};
