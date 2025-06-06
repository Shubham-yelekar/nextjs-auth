"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
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
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-neutral-400">
            Password
          </label>
          <input
            type="text"
            className="font-mono bg-neutral-800 w-full border-l-4   border-red-50 p-2 focus:outline-none focus:border-red-500  "
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            required
          />
        </div>
        <button onClick={onLogin} className="button font-mono">
          Log in
        </button>
        <hr className="border-1 border-neutral-800 " />
        <Link href="/signup">go to sign up &#8594; </Link>
      </div>
    </div>
  );
};

export default page;
