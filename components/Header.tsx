import {
  HomeIcon,
  MessageSquareIcon,
  NetworkIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center p-2 max-w-6xl mx-auto">
      <Image
        src="/assets/images/linkedin-logo.webp"
        width={40}
        height={40}
        alt="logo"
        className="rounded-md"
      />

      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96">
          <SearchIcon className="h-4 text-gray-600 " />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent  outline-none"
          />
        </form>
      </div>
      <div className="flex items-center space-x-4 px-6">
        <Link href="/" className="icon hidden md:flex">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </Link>

        <Link href="/" className="icon hidden md:flex">
          <NetworkIcon className="h-5" />
          <p>Network</p>
        </Link>

        <Link href="/" className="icon hidden md:flex">
          <UsersIcon className="h-5" />
          <p>Users</p>
        </Link>

        <Link href="/" className="icon hidden md:flex">
          <MessageSquareIcon className="h-5" />
          <p>Messaging</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
