"use client";
import { ChefHat } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#product", label: "Products" },
  { href: "#review", label: "Review" },
  { href: "#faq", label: "Faq" },
  { href: "../contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container p-4 w-full flex flex-col md:flex-row justify-between md:p-6 ">
      <div className="font-serif flex gap-1 text-2xl">
        <span>smart </span>
        <span className="text-green-400 text-5xl">
          <ChefHat />
        </span>
        <span> cookink</span>
      </div>

      <div className="flex items-center gap-4 md:hidden" onClick={toggleMenu}>
        <span className="text-3xl cursor-pointer ">☰</span>
      </div>

      <div className={`family flex flex-col md:flex-row md:gap-6 justify-between text-2xl 
         gap-6 ${isMenuOpen ? "block ; bg-slate-900 text-white pl-3 md:bg-white md:text-black md:text-xl" : "hidden"} md:flex`}>
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="lien_hover">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
