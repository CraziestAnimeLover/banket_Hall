import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About Us", "Services", "Blogs", "Contact Us"];
  const activeItem = "Home"; // Simulating active route

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 font-sans border-b border-gray-100 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/95 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <nav className="flex justify-between items-center w-full">

          {/* Left: Logo */}
          <div className="w-auto lg:w-1/4">
            <Link to="/" className="flex items-center gap-2">
              {/* Approximated Logo with SVG leaves and text */}
              <div className="relative flex items-center justify-center">
                 <svg className="w-10 h-10 text-[#878C53]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" opacity="0.3"/>
                    <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zM8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z"/>
                 </svg>
              </div>
              <span className="text-2xl font-semibold text-gray-800 italic tracking-tight">Eventro</span>
            </Link>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center w-2/4">
            <ul className="flex items-center space-x-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className={`px-5 py-2 rounded-full font-medium transition-colors ${
                      item === activeItem
                        ? "bg-[#878C53] text-white"
                        : "text-gray-600 hover:text-[#878C53]"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Buttons */}
          <div className="hidden lg:flex items-center justify-end gap-3 w-1/4">
            <button className="bg-[#878C53] text-white px-5 py-2.5 rounded-full hover:bg-[#6b6f42] transition flex items-center gap-2 font-medium text-sm">
              Book Now
              {/* Hand Pointer SVG */}
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M16.5616 6.65086C16.2751 6.65086 16.0032 6.71426 15.7585 6.82695C15.5625 5.97152 14.7957 5.33125 13.8817 5.33125C13.5888 5.33125 13.3111 5.39723 13.0623 5.51469C12.8427 4.69273 12.0919 4.08543 11.2017 4.08543C10.9342 4.08543 10.6793 4.14035 10.4476 4.23934V1.92594C10.4476 0.863945 9.58369 0 8.5217 0C7.4597 0 6.59572 0.863945 6.59572 1.92594V11.0899L5.60267 9.61578C4.84361 8.67215 3.53553 8.46676 2.54455 9.11875C2.02635 9.45965 1.67529 9.98258 1.55599 10.5912C1.43744 11.1962 1.56287 11.8092 1.90916 12.3186L5.45326 17.9051C6.35834 19.2235 7.83361 20 9.41138 20H13.3881C16.1999 20 18.4876 17.7124 18.4876 14.9005V8.57676C18.4876 7.5148 17.6236 6.65086 16.5616 6.65086Z" fill="white"/>
              </svg>
            </button>

            <button className="border border-gray-300 text-gray-600 px-5 py-2.5 rounded-full hover:border-[#878C53] hover:text-[#878C53] transition font-medium text-sm">
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl text-gray-700 hover:text-[#878C53] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              <Link
                key={item}
                to="/"
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  item === activeItem
                    ? "bg-[#878C53]/10 text-[#878C53] font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-4 px-4 border-t border-gray-100 mt-2">
              <button className="bg-[#878C53] text-white px-6 py-2.5 rounded-full flex items-center justify-center gap-2">
                Book Now
              </button>
              <button className="border border-gray-300 text-gray-600 px-6 py-2.5 rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;