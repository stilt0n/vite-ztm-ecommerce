import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase';

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};
