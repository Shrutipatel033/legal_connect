import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm xl:text-[15px] font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#C9A227] after:transition-all after:duration-300 ${isActive
      ? "text-[#C9A227] after:w-full"

      : "text-slate-700 hover:text-[#C9A227] after:w-0 hover:after:w-full"
    }`;
  const mobileNavClass = ({ isActive }) =>
    `block px-4 py-3 rounded-xl font-medium transition-all ${isActive
      ? "bg-[#C9A227]/10 text-[#C9A227]"
      : "text-[#111827] hover:bg-gray-50"
    }`;
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#b68f1c] flex items-center justify-center text-white text-lg sm:text-xl shadow-lg">
              ⚖
            </div>

            <div>
              <h1 className="text-base sm:text-xl lg:text-xl font-bold text-[#111827]">
                LegalConnect
              </h1>

              <p className="hidden sm:block text-xs text-gray-500">
                Justice • Privacy • Trust
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            <NavLink
              to="/"
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/lawyers"
              className={navLinkClass}
            >
              Find Lawyer
            </NavLink>

            <NavLink
              to="/services"
              className={navLinkClass}
            >
              Services
            </NavLink>

            <NavLink
              to="/how-it-works"
              className={navLinkClass}
            >
              How It Works
            </NavLink>

            <NavLink
              to="/blogs"
              className={navLinkClass}
            >
              Blogs
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
            >
              Contact
            </NavLink>

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl text-[#111827] p-2 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX /> : <TiThMenu />}
            </button>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">

              <button className="px-5 py-2.5 rounded-xl border border-gray-300 text-slate-700 font-medium hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300">
                Login
              </button>

              <button className="px-5 py-2.5 rounded-xl border border-[#C9A227] text-[#C9A227] font-medium hover:bg-[#C9A227] hover:text-white transition-all duration-300">
                Register
              </button>

              <button className="px-6 py-2.5 rounded-xl bg-[#111827] text-white font-medium shadow-lg hover:bg-[#1F2937] transition-all duration-300">
                Talk Privately
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-b ${isMobileMenuOpen ? "max-h-[600px] opacity-100 border-gray-100" : "max-h-0 opacity-0 border-transparent"
          }`}
      >
        <nav className="flex flex-col gap-1 p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
          <NavLink to="/" className={mobileNavClass} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/lawyers" className={mobileNavClass} onClick={() => setIsMobileMenuOpen(false)}>Find Lawyer</NavLink>
          <NavLink to="/services" className={mobileNavClass} onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
          <NavLink to="/how-it-works" className={mobileNavClass} onClick={() => setIsMobileMenuOpen(false)}>How It Works</NavLink>
          <NavLink to="/blogs" className={mobileNavClass} onClick={() => setIsMobileMenuOpen(false)}>Blogs</NavLink>
          <NavLink to="/contact" className={mobileNavClass} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <button className="w-full py-2.5 rounded-xl border border-gray-300 text-slate-700 font-medium hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300">
              Login
            </button>
            <button className="w-full py-2.5 rounded-xl border border-[#C9A227] text-[#C9A227] font-medium hover:bg-[#C9A227] hover:text-white transition-all duration-300">
              Register
            </button>
            <button className="w-full py-2.5 rounded-xl bg-[#111827] text-white font-medium shadow-lg hover:bg-[#1F2937] transition-all duration-300">
              Talk Privately
            </button>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;