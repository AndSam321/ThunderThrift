import React from "react";
import { Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span>© 2025 ThunderThrift. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium md:mt-0">
          <li>
            <a
              href="https://github.com/AndSam321"
              className="mr-6 hover:text-gray-300 flex items-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/the_tanner_andrew/"
              className="mr-6 hover:text-gray-300 flex items-center gap-2"
            >
              <Instagram size={20} /> Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 flex items-center gap-2">
              <Mail size={20} /> Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
