import footerLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-500/15 mb-10 mt-20">
      <div className="container mx-auto mt-10 flex justify-between px-4 text-center lg:px-0 lg:text-left">
        <div>
          <img
            src={footerLogo}
            className="mx-auto lg:mx-0"
            alt="Dev Stack logo"
          />
          <p className="text-[#64748B] mt-3 mb-10">
            Curated tools, technologies, and resources for developers building
            <br className="hidden sm:block" />
            modern software.
          </p>
          <ul className="flex justify-center gap-5 font-semibold text-[#475569] lg:justify-start">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold mb-4 ">PRODUCT</h1>
          <div className="text-[#475569]">
            <p>Home</p>
            <p className="mt-2 mb-2">Technologies</p>
            <p>Projects</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold mb-4 ">COMPANY</h1>
          <div className="text-[#475569]">
            <p>About</p>
            <p className="mt-2 mb-2">Contact</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="font-bold mb-4 ">LEGAL</h1>
          <div className="text-[#475569]">
            <p className="mt-2 mb-2">Privacy Popcy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-3 border-t border-t-gray-500/15 px-4 pt-10 text-center text-[15px] text-[#475569]/55 lg:flex-row lg:px-0">
        <p>© {new Date().getFullYear()} - Dev Stack. All rights reserved.</p>
        <ul className="flex gap-3">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
