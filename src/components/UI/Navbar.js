import React from "react";

const Navbar = () => {
  let pathName = window.location.pathname;
  return (
    <nav className="sticky top-0 bg-base100 w-full lg:w-2/3">
      {/* Flex Container */}
      <div className="container flex items-center justify-between mx-auto py-3 md:py-5">
        {/* Website Branding */}
        <a href="/" className="flex items-center gap-2">
          {/* Icon */}
          <i className="fa-solid fa-rocket text-primary fa-xl"></i>
          {/* Project Name */}
          <p className="text-baseContent font-bold text-xl md:text-3xl">Crypto Tracker</p>
        </a>
        {/* Nav Links */}
        <ul className="flex text-xs md:text-base">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
