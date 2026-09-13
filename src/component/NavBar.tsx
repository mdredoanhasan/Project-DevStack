import navLogo from "../assets/logo-text.png";
import { FaBars } from "react-icons/fa6";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 mb-35 w-full border-b border-b-gray-500/15 bg-white">
      <div className="container mx-auto grid grid-cols-3 items-center px-4 py-3 lg:px-0">
        <button
          className="btn btn-ghost btn-square col-start-1 row-start-1 justify-self-start lg:hidden"
          aria-label="Open menu"
        >
          <FaBars className="text-xl" />
        </button>

        <img
          src={navLogo}
          alt="Nav Logo"
          className="col-start-2 row-start-1 w-20 justify-self-center sm:w-24 lg:col-start-1 lg:w-auto lg:justify-self-start"
        />

        <ul className="col-start-2 row-start-1 hidden justify-self-center gap-6 text-[#475569] lg:flex">
          <li>
            <span className="text-[#DB2777]">Home</span>
          </li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="col-start-3 row-start-1 flex justify-self-end gap-1 text-[11px] whitespace-nowrap lg:gap-4 lg:text-base">
          <button className="px-0.5 lg:px-0">Sign In</button>
          <button className="h-9 rounded-3xl bg-[#DB2777] px-2 text-[rgb(252,252,252)] lg:h-10 lg:w-23.75 lg:px-3">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
