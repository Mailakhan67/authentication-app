"use client";
import { signIn } from "next-auth/react";

export default function LogInComponent() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-auto mt-[16px">
        <button
          onClick={() => signIn("github")}
          className="bg-[#000000] text-[#ffffff] mt-[7px]  p-2 rounded-md text-2xl font-serif  w-[550px]"
        >
          sign in with github{" "}
        </button>

        <button
          onClick={() => signIn("google")}
          className="bg-blue-400 text-[#000000]  mt-[10px] p-2 rounded-md text-2xl font-serif  s w-[550px]"
        >
          {" "}
          sign in with google{" "}
        </button>
      </div>
    </>
  );
}
