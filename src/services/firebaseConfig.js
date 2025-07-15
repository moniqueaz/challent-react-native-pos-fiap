import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //aqui vai as configurações do firebase
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { app, auth };
