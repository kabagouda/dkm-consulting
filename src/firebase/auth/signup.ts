import { setCookie } from "cookies-next";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "sonner";
import firebase_app from "../config";

const auth = getAuth(firebase_app);

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("user", JSON.stringify(result.user));
    toast.success("Vous êtes connecté avec succès!");
    setCookie("user", JSON.stringify(result.user), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
