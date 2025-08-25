'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MediaProject from '@/components/MediaProject';

export default function Media() {
  const mediaProjects = [
    {
      title: "Percussion Ensembles",
      type: "Performance Video",
      year: "2022",
      description: [
        "Directed audio and video production for ensemble performances",
        "Optimized microphone placement for complex stage setups",
        "Managed sound isolation between different percussion sections",
        "Produced final mix for video distribution"
      ],
      videoUrl: "https://youtu.be/ONUBF2eoc8U"
    },
    {
      title: "Color Guard Hype Video",
      type: "Promotional Video",
      year: "2022",
      description: [
        "Created an energetic hype video for school's color guard",
        "Combined dynamic visuals with engaging music",
        "Directed and edited the entire production"
      ],
      videoUrl: "https://youtu.be/uonRvGSzQzU?si=o3WFc2k0yZ_7xyLG"
    },
    {
      title: "Troy School District Bond Proposal - Student Perspectives",
      type: "Campaign Video",
      year: "2022",
      description: [
        "Interviewed students about proposed changes to school district",
        "Captured opinions on building and infrastructure improvements",
        "Created compelling content to support bond proposal campaign"
      ],
      videoUrl: "https://youtu.be/Vg4x8B4r33k?si=RkEGHBkZK8jt6vTh"
    },
    {
      title: "Troy School District Bond Proposal - Infrastructure Focus",
      type: "Campaign Video",
      year: "2022",
      description: [
        "Focused on infrastructure aspects of the bond proposal",
        "Highlighted key improvements needed in school facilities",
        "Presented student perspectives on facility upgrades"
      ],
      videoUrl: "https://youtu.be/cWbXKxg8m_U?si=6zvBHxPdKH3xyrIo"
    },
    {
      title: "Vennelalolike Music Video",
      type: "Music Video",
      year: "2022",
      description: [
        "Independent Telugu song production",
        "Complete filming and editing by me",
        "Combined cultural elements with modern videography"
      ],
      videoUrl: "https://youtu.be/QU-vHBRkUEs?si=VpPFo1sgXmqRnD-t"
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section with Camera Image */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/4C8A6628edit.png"
            alt="Media Production"
            fill
            className="object-cover object-top"
            priority
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
                Media Projects
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200">
                Capturing moments and telling stories through video
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {mediaProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MediaProject {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}