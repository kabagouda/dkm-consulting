import { useAuthContext } from "@/context/AuthContext";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Page() {
  const { user } = useAuthContext() as { user: any };
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");
  const auth = getAuth();
  console.log(user);

  useEffect(() => {
    if (user == null && !userSession) {
      router.push("/signin");
    }
  }, [user, router, userSession]);
  return <h1>Hello, Dashboard Page!</h1>;
}
