import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="h-20 w-full  items-center flex gap-8 shadow-sm text-gray-400 px-10 sticky top-0 bg-white z-20">
      <div className="flex items-center flex-1 gap-4  ">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none bg-transparent border-none"
        />
      </div>
      <Bell size={20} className="cursor-pointer hover:text-black" /> {"|"}
      <div className="userProfile flex items-center gap-2 text-black">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
};

export default Header;
