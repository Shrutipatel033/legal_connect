import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#C9A227] flex items-center justify-center text-black text-xl font-bold">
              ⚖
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                LegalConnect
              </h1>
              <p className="text-xs text-slate-500">
                Justice • Privacy • Trust
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/lawyers"
              className="text-slate-700 hover:text-[#C9A227] font-medium"
            >
              Find Lawyer
            </Link>

            <Link
              to="/services"
              className="text-slate-700 hover:text-[#C9A227] font-medium"
            >
              Services
            </Link>

            <Link
              to="/how-it-works"
              className="text-slate-700 hover:text-[#C9A227]  font-medium"
            >
              How It Works
            </Link>

            <Link
              to="/blogs"
              className="text-slate-700 hover:text-[#C9A227]  font-medium"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="text-slate-700 hover:text-[#C9A227]  font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-slate-700 font-medium hover:bg-[#C9A227] border border-gray-400 py-2 px-5 rounded-lg ">
              Login
            </button>

            <button className="border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black px-5 py-2 rounded-lg font-medium">
              Register
            </button>

            <button className="bg-[#111827] hover:bg-[#1F2937] text-white px-5 py-2 rounded-lg font-medium">
              Talk Privately
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;