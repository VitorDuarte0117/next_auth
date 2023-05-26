import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 shadow bg-gradient-to-b from-white to-gray-200">
      <Link className="transition-colors hover:text-blue-500" href={"/"}>
        Home Page
      </Link>
      <Link className="transition-colors hover:text-blue-500" href={"/UserPost"}>
        User Post Page
      </Link>
      <SignInButton />
    </header>
  );
};

export default AppBar;