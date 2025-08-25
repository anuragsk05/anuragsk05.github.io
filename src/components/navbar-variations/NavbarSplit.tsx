'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Modern Split Layout with Two Bars
export default function NavbarSplit() {
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
    <nav className="fixed w-full z-50">
      <div className="bg-dark/95 backdrop-blur-md">
        {/* Top bar with name and social */}
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between border-b border-gray-800">
          <Link href="/" className="text-xl font-medium text-white">
            Anurag Komaragiri
          </Link>
          <div className="flex items-center space-x-6">
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
        
        {/* Bottom bar with navigation */}
        <div className="max-w-7xl mx-auto px-8 py-3">
          <div className="hidden md:flex items-center justify-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all ${
                  pathname === item.href
                    ? 'text-accent-purple'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
