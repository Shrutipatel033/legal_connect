import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center font-bold">
                ⚖
              </div>

              <div>
                <h2 className="font-bold text-xl">
                  LegalConnect
                </h2>
              </div>
            </div>

            <p className="text-gray-400 leading-7">
              Connect with verified lawyers, get legal advice,
              manage cases and protect your privacy through
              secure consultations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/lawyers">Find Lawyer</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Legal Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Family Law</li>
              <li>Criminal Law</li>
              <li>Property Law</li>
              <li>Corporate Law</li>
              <li>Cyber Law</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Lucknow, Uttar Pradesh</p>
              <p>📞 +91 98765 43210</p>
              <p>✉ support@legalconnect.com</p>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © 2026 LegalConnect. All Rights Reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;