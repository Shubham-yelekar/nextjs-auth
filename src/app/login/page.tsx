"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface userType {
  email: string;
  password: string;
}

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [togglePass, setTogglePass] = React.useState(true);
  const router = useRouter();
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/login", user);
      console.log("login success", response.data);
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        duration: 4000,
        position: "top-center",
        icon: "⊘",
        style: {
          color: "#f1f1f1",
          background: "#BE3144",
          borderRadius: "0px",
        },
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [user]);

  return (
    <div className="m-auto mt-[10vh] max-w-72 font-mono text-sm">
      <h1 className="p-2"> &#8692; Log In</h1>
      <hr className="border-1 border-neutral-800 " />
      <div className="p-2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-neutral-400">
            E-mail
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="font-mono bg-neutral-800 w-full border-l-4   border-red-50 p-2 focus:outline-none focus:border-red-500 "
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password" className="text-neutral-400">
            Password
          </label>
          <input
            type={togglePass ? "password" : "text"}
            className="font-mono bg-neutral-800 w-full border-l-4   border-red-50 p-2 focus:outline-none focus:border-red-500  "
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            required
          />
          <button
            onClick={() => setTogglePass((prev) => !prev)}
            className="absolute cursor-pointer bg-neutral-600 right-0 top-7 aspect-square w-9 p-0"
          >
            {togglePass ? "⌒" : "⌓"}
          </button>
        </div>
        <button
          onClick={onLogin}
          className={`button font-mono a-Button  ${
            btnDisabled ? "opacity-20 pointer-events-none" : ""
          }`}
        >
          {loading ? (
            <div className="flex justify-center gap-4">
              <div className="w-5 h-5 border-2 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
              Loging you up...
            </div>
          ) : (
            "Log in"
          )}
        </button>
        <hr className="border-1 border-neutral-800 " />
        <Link href="/signup">go to sign up &#8594; </Link>
      </div>
    </div>
  );
};

export default page;
