import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase_app from "../config";

const auth = getAuth(firebase_app);

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("user", JSON.stringify(result.user));
  } catch (e) {
    error = e;
  }

  return { result, error };
}
