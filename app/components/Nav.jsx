"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../images/tinyLogo.png";
import SignOut from "./SignOut";

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <nav className="bg-blue-800 p-4 shadow-lg rounded-2xl bg-opacity-50 mb-12">
      <ul className="flex justify-between items-center">
        <div className="flex items-center space-x-12 px-4">
          <li
            className={`transition-all duration-300 ${
              currentPath === "/photos"
                ? "bg-gray-700 bg-opacity-75 shadow-lg transform scale-105"
                : "hover:bg-gray-600 hover:bg-opacity-50"
            } rounded-xl p-3`}
          >
            <Link href="/photos">
              <span className="text-white font-semibold text-lg px-4 py-2 block transition-colors duration-300 cursor-pointer">
                All Photos
              </span>
            </Link>
          </li>
          <li
            className={`transition-all duration-300 ${
              currentPath === "/favorites"
                ? "bg-gray-700 bg-opacity-75 shadow-lg transform scale-105"
                : "hover:bg-gray-600 hover:bg-opacity-50"
            } rounded-xl p-3`}
          >
            <Link href="/favorites">
              <span className="text-white font-semibold text-lg px-4 py-2 block transition-colors duration-300 cursor-pointer">
                Favorites
              </span>
            </Link>
          </li>
        </div>
        <div className="flex items-center pr-60">
            <Image src={logo} width={75} height={75}></Image>
        </div>
        <li className="transition-all duration-300 hover:bg-gray-600 hover:bg-opacity-50 rounded-xl p-3 pr-4">
          <SignOut />
          {/* <Link href={"/photos"}>
              <Image src={logo} width={50} height={50} />
            </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
