'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const songs = [
  { title: "Gucci Guilty", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "Signs (with Paradyse)", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "Icarus", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "Until the Night's Done", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "IJDK (with Jess U)", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "Remember Me", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "Color", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "Run Away", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "Edge of the Sky", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" },
  { title: "Sangria Wine", url: "https://open.spotify.com/playlist/3E9A9RqROI9qBOhMZLAKtN" }
];

export default function SongCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % songs.length);
    }, 2000); // Change song every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-4">Check out my music:</p>
          <div className="h-12 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <Link
                  href={songs[currentIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-white hover:text-accent-blue transition-colors"
                >
                  {songs[currentIndex].title}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}