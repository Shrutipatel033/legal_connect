import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {

  const navLinkClass = ({ isActive }) =>
    `relative text-sm xl:text-[15px] font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#C9A227] after:transition-all after:duration-300 ${isActive
      ? "text-[#C9A227] after:w-full"

      : "text-slate-700 hover:text-[#C9A227] after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#b68f1c] flex items-center justify-center text-white text-xl shadow-lg">
              ⚖
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#111827]">
                LegalConnect
              </h1>

              <p className="text-xs text-gray-500">
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
          <div className="flex items-center gap-3">

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-3xl text-[#111827]">
              <HiOutlineMenuAlt3 />
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

    </header>
  );
};

export default Header;