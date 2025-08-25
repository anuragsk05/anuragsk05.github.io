'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MusicProject from '@/components/MusicProject';
import SongCarousel from '@/components/SongCarousel';
import { FaSpotify, FaLink } from 'react-icons/fa';

const projects = [
  {
    title: "Remember Me",
    type: "Music Video",
    year: "2023",
    description: [
      "Original song and music video production",
      "Post-production audio cleanup",
      "Composed the background music for the skit",
      "Designed the idea for the music video and directed the shoot"
    ],
    link: "https://youtu.be/xItFWW5-99g",
    linkText: "Watch Music Video"
  },
  {
    title: "High School District Albums",
    type: "Producer",
    year: "2022 - 2023",
    description: [
      "Produced two albums for the school district",
      "Forward (2023) - Produced and engineered district-wide album",
      "Dreamin' Big (2022) - Led production and artist development",
      "Sourced and mentored artists through creative process",
      "Managed full production pipeline from recording to release"
    ],
    link: "https://open.spotify.com/album/15c6FQlhnL3Xam1gUnO7Uq",
    linkText: "Listen to Forward"
  },
  {
    title: "Snow Angels",
    type: "Composer & Producer",
    year: "2022",
    description: [
      "Original holiday jazz composition",
      "Recorded and mixed 3 saxophones, upright bass, piano, drums, and vocals",
      "Full production from composition to release",
      "Available on all streaming platforms"
    ],
    link: "https://open.spotify.com/album/5IFQqgZlvQ39MaGwfvQGhL",
    linkText: "Listen on Spotify"
  },
  {
    title: "The Ripening",
    type: "Film Score",
    year: "2025 (Unreleased)",
    description: [
      "Scored an FTVM portfolio project",
      "Incorporated sounds of Indian culture to complement the film's themes",
      "Created original compositions that enhance the narrative",
      "Blended traditional and modern musical elements"
    ],
    link: "https://youtu.be/xDwfwTN4uj0",
    linkText: "Watch Preview"
  },
  {
    title: "The Objective",
    type: "Film Score & Sound Design",
    year: "2022",
    description: [
      "Composed original score with distinct musical motifs",
      "Created unique themes: hero's triumph (electric guitar), villain's strength (808 bass), magical bracelet (shimmer)",
      "Handled ADR recording for dialogue",
      "Integrated sound design with musical score"
    ],
    link: "https://youtu.be/OSUzhWaA4Hw",
    linkText: "Watch Film"
  },
  {
    title: "The Loop",
    type: "Film Score",
    year: "2021",
    description: [
      "First original film score composition",
      "Created dystopian landscape through progressive synths",
      "Incorporated orchestral drums for theatrical impact",
      "Balanced electronic and melodic elements"
    ],
    link: "https://youtu.be/Vqmr_QeE0Wg",
    linkText: "Watch Film"
  }
];

export default function Music() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_5244.jpeg"
            alt="Music Background"
            fill
            className="object-cover object-top object-[center_30%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/40 to-dark" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                Music
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8">
                Creating and producing music that moves people
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://open.spotify.com/artist/36leFktqiSIxX1u3qWpbXE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-md text-white bg-[#1DB954] hover:bg-[#1DB954]/80 transition-colors"
                >
                  <FaSpotify className="mr-2 text-xl" />
                  Listen on Spotify
                </a>
                <a
                  href="https://linktr.ee/aykom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-md text-white bg-accent-blue hover:bg-accent-blue/80 transition-colors"
                >
                  <FaLink className="mr-2 text-xl" />
                  Visit Linktree
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Song Carousel */}
      <SongCarousel />

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MusicProject {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}