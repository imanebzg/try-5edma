"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import AuthLinks from "./AuthLinks";

function Navigation({ session }) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center">
        <Logo />
      </div>

      {pathname === "/" ? (
        <div className="hidden md:flex space-x-8">
          <Link
            href="#discover"
            className="text-blue-800 hover:text-blue-600 font-medium transition"
          >
            Découvrir
          </Link>
          <Link
            href="#how-it-works"
            className="text-blue-800 hover:text-blue-600 font-medium transition"
          >
            Comment ça marche
          </Link>
          <Link
            href="#testimonials"
            className="text-blue-800 hover:text-blue-600 font-medium transition"
          >
            Témoignages
          </Link>
          <Link
            href="#faq"
            className="text-blue-800 hover:text-blue-600 font-medium transition"
          >
            FAQ
          </Link>
        </div>
      ) : null}
      {!session?.user ? (
        <Link
          href="/#hero"
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 transition transform hover:scale-105 shadow-lg"
        >
          Inscription
        </Link>
      ) : (
        <AuthLinks />
      )}
    </>
  );
}

export default Navigation;
