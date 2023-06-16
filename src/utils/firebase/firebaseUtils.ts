import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
} from 'firebase/firestore';
import { config } from './firebaseConfig';
import { InventoryDoc, InventoryCategoryMap } from '../typeUtil';

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(config);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const loadCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce(
    (acc: InventoryCategoryMap, docSnapshot) => {
      const { title, items } = docSnapshot.data() as InventoryDoc;
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth: User) => {
  // check for document reference
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.error('There was an error creating the user');
      console.error(e);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInVanilla = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => {
  onAuthStateChanged(auth, callback);
};
