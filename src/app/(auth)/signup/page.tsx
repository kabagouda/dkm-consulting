"use client";
import { Input } from "@/components/ui/input";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      console.log(error);
      return;
    }

    console.log(result);

    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="w-96 bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-6">Registration</h1>
        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="example@mail.com"
              className="w-full border border-gray-300 rounded px-3 py-2  "
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              hidden
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
