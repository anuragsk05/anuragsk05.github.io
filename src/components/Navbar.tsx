'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiCheck } from 'react-icons/fi';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Education', href: '/education' },
  { name: 'Music', href: '/music' },
  { name: 'Media', href: '/media' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('anurag.s.kom@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-sm">
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left-aligned Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base transition-all tracking-wide ${
                  pathname === item.href
                    ? 'text-accent-purple font-medium'
                    : 'text-gray-300 hover:text-white hover:tracking-wider'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right-aligned Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/anurag-komaragiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/anuragsk05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent-purple transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="text-gray-300 hover:text-accent-blue transition-colors focus:outline-none"
              >
                {showCopied ? (
                  <FiCheck className="h-5 w-5 text-green-500" />
                ) : (
                  <FiMail className="h-5 w-5" />
                )}
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 w-32 flex justify-center">
                <span className="px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {showCopied ? 'Copied!' : 'Click to copy email'}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-accent-blue/80 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: -20 }
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark/95">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base tracking-wide ${
                  isActive
                    ? 'text-white bg-accent-blue font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-accent-blue/80'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          {/* Social Links - Mobile */}
          <div className="flex items-center space-x-4 px-3 py-2">
            <a
              href="https://www.linkedin.com/in/anurag-komaragiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/anuragsk05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent-purple transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <button
              onClick={handleCopyEmail}
              className="text-gray-300 hover:text-accent-blue transition-colors focus:outline-none"
            >
              {showCopied ? (
                <FiCheck className="h-6 w-6 text-green-500" />
              ) : (
                <FiMail className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}