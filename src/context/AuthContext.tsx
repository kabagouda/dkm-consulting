"use client";
import firebase_app from "@/firebase/config";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{loading ? <div></div> : children}</AuthContext.Provider>;
}
