import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="w-full text-center py-10 bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/venupagadala"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/venu-pagadala-77ab3a251"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="mailto:venupagadala13@gmail.com"
          aria-label="Send an email"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          <MdEmail size={24} />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Talking Introvert. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;