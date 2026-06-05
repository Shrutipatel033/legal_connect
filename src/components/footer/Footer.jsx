import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#111827] to-black text-white mt-20">

      {/* Newsletter */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16">

        <div className="bg-gradient-to-r from-[#C9A227] to-[#b88f1f] rounded-[32px] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Stay Updated With Legal Insights
            </h2>

            <p className="text-white/90 mt-2">
              Subscribe for legal tips, updates and expert advice.
            </p>
          </div>

          <div className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 lg:w-80 px-5 py-4 rounded-xl text-black outline-none bor border border-gray-400"
            />

            <button className="bg-[#111827] text-white px-6 py-4 rounded-xl font-semibold hover:bg-black transition">
              Subscribe
            </button>
          </div>

        </div>

      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-xl bg-[#C9A227] flex items-center justify-center text-xl">
                ⚖
              </div>

              <div>
                <h2 className="font-bold text-2xl">
                  LegalConnect
                </h2>

                <p className="text-gray-400 text-sm">
                  Trusted Legal Platform
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-8">
              Connect with verified lawyers, get secure legal
              consultations, manage cases and protect your privacy.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#C9A227] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/lawyers"
                  className="text-gray-400 hover:text-[#C9A227] transition"
                >
                  Find Lawyer
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#C9A227] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="text-gray-400 hover:text-[#C9A227] transition"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#C9A227] transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-white">
              Legal Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-[#C9A227] cursor-pointer transition">
                Family Law
              </li>

              <li className="hover:text-[#C9A227] cursor-pointer transition">
                Criminal Law
              </li>

              <li className="hover:text-[#C9A227] cursor-pointer transition">
                Property Law
              </li>

              <li className="hover:text-[#C9A227] cursor-pointer transition">
                Corporate Law
              </li>

              <li className="hover:text-[#C9A227] cursor-pointer transition">
                Cyber Law
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                📍 Lucknow, Uttar Pradesh
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                ✉ support@legalconnect.com
              </p>

              <p>
                🕒 Mon - Sat : 9 AM - 8 PM
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-8">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            <p className="text-gray-400 text-sm text-center lg:text-left">
              © 2026 LegalConnect. All Rights Reserved.
            </p>

            <div className="flex gap-5">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A227] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A227] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A227] transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A227] transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A227] transition"
              >
                <FaXTwitter />
              </a>

            </div>

            <div className="flex gap-5 text-sm">

              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#C9A227]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-gray-400 hover:text-[#C9A227]"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;