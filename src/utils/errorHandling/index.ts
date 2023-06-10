import { FirebaseError } from '@firebase/util';

export const isFirebaseError = (error: unknown) =>
  error instanceof FirebaseError;

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const getErrorCode = (error: unknown) => {
  if (error instanceof FirebaseError) return error.code;
  return null;
};
