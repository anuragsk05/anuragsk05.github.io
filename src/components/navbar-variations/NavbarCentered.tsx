'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Centered Navigation with Icons Right
export default function NavbarCentered() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Education', href: '/education' },
    { name: 'Music', href: '/music' },
    { name: 'Media', href: '/media' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Center-aligned Navigation */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-accent-purple'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
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
          </div>
        </div>
      </div>
    </nav>
  );
}
