import React from "react";

const Navbar = () => {
  let pathName = window.location.pathname;
  return (
    <nav className="bg-base100 w-full lg:w-2/3 lg:sticky lg:top-0 lg:z-50">
      {/* Flex Container */}
      <div className="container flex items-center justify-between mx-auto py-3 md:py-5">
        {/* Website Branding */}
        <a href="/" className="flex items-center gap-2">
          {/* Icon */}
          <i className="fa-solid fa-rocket text-primary fa-xl"></i>
          {/* Project Name */}
          <p className="text-baseContent font-bold text-xl md:text-3xl">
            Crypto Tracker
          </p>
        </a>
        {/* Nav Links */}
        <ul className="flex text-sm md:text-base">
          <li className="pr-3">
            {/* Links to Homepage */}
            <a
              className={`font-semibold hover:underline ${
                pathName === "/" ? "text-accent" : "text-baseContent"
              }`}
              href="/"
            >
              Home
            </a>
          </li>
          <li className="pr-3">
            {/* Links to Homepage */}
            <a
              className={`font-semibold hover:underline ${
                pathName === "/portfolio" ? "text-accent" : "text-baseContent"
              }`}
              href="/portfolio"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
