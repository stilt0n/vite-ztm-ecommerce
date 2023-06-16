const { getFirestore, doc, collection, writeBatch } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');
const SHOP_DATA = require('./shopData');

// TODO: at some point it would be better to centralize this
// Your web app's Firebase configuration
const config = {
  // Note: Firebase docs say that Firebase API keys are safe
  // to include in code or checked-in config files
  // see: https://firebase.google.com/docs/projects/api-keys
  apiKey: "AIzaSyCBtiV7Cehs-p94i34kTHom9p95DXrnEhw",
  authDomain: "ztm-vite-ecom-db.firebaseapp.com",
  projectId: "ztm-vite-ecom-db",
  storageBucket: "ztm-vite-ecom-db.appspot.com",
  messagingSenderId: "243603686658",
  appId: "1:243603686658:web:30c08cace635024d79ee1b"
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(config);

const db = getFirestore();

const addCollectionAndDocuments = async (
  collectionKey,
  docsToAdd,
  verbose=false
) => {
  const verboseLog = (s) => {
    if (verbose) console.log(s);
  };
  verboseLog(`adding ${docsToAdd.length} docs to the database...`);
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  docsToAdd.forEach((fbdoc) => {
    verboseLog(`adding ${fbdoc.title} doc to batch...`);
    const docRef = doc(collectionRef, fbdoc.title.toLowerCase());
    batch.set(docRef, fbdoc);
  });
  verboseLog('committing batch...');
  await batch.commit();
  verboseLog('batch committed!');
};

addCollectionAndDocuments('categories', SHOP_DATA, true);