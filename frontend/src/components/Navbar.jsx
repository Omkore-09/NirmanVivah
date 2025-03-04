import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import React from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Benifit", path: "/benifit" },
    { name: "More", path: "/more" },
  ];

  return (
    <nav className="bg-[#9b1c1c]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white font-extrabold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-evenly items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-gray-300 font-bold text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}

            <SignedIn>
              <div className="ml-4 border-2 border-white rounded-full p-1 flex items-center justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-white hover:bg-gray-700 font-semibold"
              >
                {link.name}
              </Link>
            ))}

            {/* Profile Icon in mobile menu */}
            <SignedIn>
              <div className="mt-2 px-3">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        )}
      </div>
    </nav>
  );
}
