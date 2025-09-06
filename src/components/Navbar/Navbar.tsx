"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/blog", label: "Blog" },
    { href: "#", label: "Page", icon: <IoChevronDown /> },
    { href: "#", label: "Premium Theme" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      <div className="px-6 lg:px-[70px] flex justify-between items-center h-18">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Img/LOGO.webp" alt="logo" width={163} height={30} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-semibold text-black">
          {links.map((link, index) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-5 py-6 ${
                  link.href === "/"
                    ? pathname === "/" || pathname === "/login-register"
                      ? "bg-gray-100 text-orange-500"
                      : "hover:text-orange-500"
                    : pathname.startsWith(link.href)
                    ? "bg-gray-100 text-orange-500"
                    : "hover:text-orange-500"
                }`}
              >
                {link.label}
                {link.icon && <span>{link.icon}</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login-register"
            className="text-lg font-medium text-black"
          >
            Login / Register
          </Link>
          <Image src="/Img/Search.webp" alt="search" width={48} height={48} />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <Image src="/Img/LOGO (1).webp" alt="logo" width={39} height={30} />
            <button onClick={() => setMenuOpen(false)}>
              <FaTimes className="text-2xl text-gray-700" />
            </button>
          </div>

          <ul className="flex flex-col gap-1 font-semibold">
            {links.map((link) => (
              <li key={link.href + link.label}>
                <Link 
                  href={link.href}
                  className={`px-6 py-5 flex justify-between items-center border-b border-gray-200 " ${
                    link.href === "/"
                      ? pathname === "/" || pathname === "/login-register"
                        ? "bg-gray-100 text-orange-500"
                        : ""
                      : pathname.startsWith(link.href)
                      ? "bg-gray-100 text-orange-500"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  {link.icon &&<span>{link.icon}</span>}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search */}
          <div className="px-5 mt-4">
            <div className="flex items-center border-b">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-2 py-2 focus:outline-none"
              />
              <FaSearch className="text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Login Button */}
          <div className="justify-center flex items-center">
            <Link
              href="/login-register"
              className="w-[170px] block text-center mt-[116px] px-5 py-2 bg-orange-500 text-white rounded-3xl cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
