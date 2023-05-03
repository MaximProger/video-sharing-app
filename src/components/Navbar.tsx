import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import {
  CredentialResponse,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import Logo from "../utils/tiktik-logo.png";
import { createOrGetUser } from "@/utils";

import useAuthStore from "@/store/authStore";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { userProfile, addUser, removeUser }: any = useAuthStore();
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image className="cursor-pointer" src={Logo} alt="TikTik" />
        </div>
      </Link>
      <div className="relative hidden md:block">
        <form
          onSubmit={handleSearch}
          className="absolute md:static top-10 -left-20 bg-white"
        >
          <input
            type="text"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search accounts and video"
            className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full md:top-0"
            required
          />
          <button
            type="submit"
            className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div>
        {userProfile ? (
          <div className="flex items-center gap-5 md:gap-10">
            <Link href="/upload">
              <button
                type="button"
                className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2"
              >
                <IoMdAdd className="text-xl" /> {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href={`/profile/${userProfile._id}`}>
                <>
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full w-[40px] h-[40px] object-cover cursor-pointer"
                    src={userProfile.image}
                    alt={userProfile.userName}
                  />
                </>
              </Link>
            )}
            <button
              type="button"
              className="p-2 shadow-md rounded-full flex items-center justify-center"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
