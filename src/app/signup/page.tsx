"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { error } from "console";

interface userType {
  email: string;
  password: string;
  username: string;
}

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const router = useRouter();
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [togglePass, setTogglePass] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  // const notify = () =>
  //   toast("Sign up failed", {
  //     duration: 4000,
  //     position: "top-center",
  //     icon: "⊘",
  //     style: {
  //       color: "#f1f1f1",
  //       background: "#BE3144",
  //       borderRadius: "0px",
  //     },
  //   });
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/signup", user);
      console.log("Signup Success", response.data);

      router.push("/login");
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
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 8 &&
      user.username.length > 1
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [user]);

  return (
    <div className="m-auto mt-[10vh] max-w-72 font-mono text-sm">
      {/* <button onClick={notify}>Make me a toast</button> */}
      <Toaster />
      <h1 className="p-2"> &#xA4; Sign up</h1>
      <hr className="border-1 border-neutral-800 " />
      <div className="p-2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-neutral-400">
            User Name
          </label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="font-mono bg-neutral-800 w-full border-l-4   border-neutral-600 p-2 hover:border-neutral-200 focus:outline-none focus:border-red-500  "
            name="username"
            placeholder="username"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-neutral-400">
            E-mail
          </label>
          <input
            type="email"
            value={user.email}
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="font-mono bg-neutral-800 w-full border-l-4 p-2 border-neutral-600  hover:border-neutral-200 focus:outline-none  focus:border-red-500 "
            name="email"
            required
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password" className="text-neutral-400">
            Password
          </label>
          <button
            onClick={() => setTogglePass((prev) => !prev)}
            className="absolute cursor-pointer bg-neutral-600 right-0 top-7 aspect-square w-9 p-0"
          >
            {togglePass ? "⌒" : "⌓"}
          </button>
          <input
            type={togglePass ? "password" : "text"}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            className="font-mono bg-neutral-800 w-full border-l-4   border-neutral-600 p-2 hover:border-neutral-200 focus:outline-none focus:border-red-500  "
            name="password"
            required
          />
        </div>
        <button
          onClick={onSignup}
          className={`button font-mono a-Button  ${
            btnDisabled ? "opacity-20 pointer-events-none" : ""
          }`}
        >
          {loading ? (
            <div className="flex justify-center gap-4">
              <div className="w-5 h-5 border-2 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
              signing you up...
            </div>
          ) : (
            "Sign up"
          )}
        </button>
        <hr className="border-1 border-neutral-800 " />
        <Link href="/login">visit login &#8594;</Link>
      </div>
    </div>
  );
};

export default page;
