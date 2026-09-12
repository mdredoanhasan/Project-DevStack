import footerLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-500/15 mb-15 mt-20">
      <div className="flex container mx-auto mt-10 justify-between  ">
        <div>
          <img src={footerLogo} />
          <p className="text-[#64748B] mt-3 mb-10">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <ul className="flex gap-5 text-[#475569] font-semibold">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4 ">PRODUCT</h1>
          <div className=" text-[#475569] ">
            <p>Home</p>
            <p className="mt-2 mb-2">Technologies</p>
            <p>Projects</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-4 ">COMPANY</h1>
          <div className=" text-[#475569]">
            <p>About</p>
            <p  className="mt-2 mb-2">Contact</p>
            <p>Careers</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-4 ">LEGAL</h1>
          <div className=" text-[#475569] ">
            <p className="mt-2 mb-2">Privacy Popcy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between mt-20 border-t border-t-gray-500/15 pt-10 text-[#475569]/55 text-[15px]">
        <p> © {new Date().getFullYear()} - Dev Stack. All rights reserved.</p>
        <ul className="flex gap-3 " >
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
