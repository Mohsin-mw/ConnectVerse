import { footerLinks } from "../../constants/Constants"; // Importing footerLinks from constants

/**
 * Footer component that displays social links and copyright information.
 * @component
 */
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          {footerLinks.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        {/* Copyright Information */}
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Discord, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
