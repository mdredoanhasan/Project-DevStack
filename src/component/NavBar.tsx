import navLogo from "../assets/logo-text.png";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white  border-b border-b-gray-500/15 mb-35">
      <div className="  navbar justify-between container mx-auto">
        <img src={navLogo} alt="Nav Logo" />

        <ul className="flex gap-6 text-[#475569]">
          <li>
            <span className="text-[#DB2777]">Home</span>
          </li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4">
          <button>Sign In</button>
          <button className="text-[rgb(252,252,252)] bg-[#DB2777] w-23.75 h-10 rounded-3xl">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
