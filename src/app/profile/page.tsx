"use client";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
const page = () => {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");
  async function logout() {
    try {
      const response = await axios.get("/api/users/logout");
      console.log("Logout Successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <div>
      <button onClick={logout} className="button font-mono a-Button ">
        Logout
      </button>
      <button className="a-Button" onClick={getUserDetails}>
        get data
      </button>
      <h1>Profile Page</h1>
      <h2 className="p-1 ">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
    </div>
  );
};

export default page;
