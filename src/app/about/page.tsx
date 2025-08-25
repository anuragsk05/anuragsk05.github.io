'use client';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function About() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/anuragsk05',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anurag-komaragiri/',
      icon: FiLinkedin,
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Get to know me better
          </p>
        </motion.div>

        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a passionate software engineer with a strong foundation in computer science and a keen interest in building innovative solutions. I enjoy tackling complex problems and creating user-friendly applications that make a difference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              My technical journey has equipped me with experience in various technologies and frameworks, allowing me to approach problems from different angles and implement efficient solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900">Connect with Me</h2>
            <div className="mt-6 flex justify-center space-x-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <span className="sr-only">{link.name}</span>
                    <Icon className="h-8 w-8" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-gray-50 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Skills & Interests</h2>
            <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <li className="text-gray-700">Web Development</li>
              <li className="text-gray-700">Software Architecture</li>
              <li className="text-gray-700">Problem Solving</li>
              <li className="text-gray-700">User Experience</li>
              <li className="text-gray-700">Team Collaboration</li>
              <li className="text-gray-700">Continuous Learning</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}