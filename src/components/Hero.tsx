'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaMusic, FaLaptopCode } from 'react-icons/fa';

export default function Hero() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/Senior Photos-201.jpg"
            alt="Anurag Komaragiri"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pt-32 pb-16 sm:pt-48 sm:pb-20 lg:pt-64 lg:pb-28 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{' '}
              <span className="block text-accent-blue xl:inline">
                Anurag Komaragiri
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Software Engineer • Musician • Creator
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/experience"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-purple hover:bg-accent-purple/80 transition-colors"
                >
                  <FaLaptopCode className="mr-2 text-xl" />
                  View My Experience
                </Link>
                <Link
                  href="https://linktr.ee/aykom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-blue hover:bg-accent-blue/80 transition-colors"
                >
                  <FaMusic className="mr-2 text-xl" />
                  Visit my Linktree
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.linkedin.com/in/anurag-komaragiri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0A66C2] hover:bg-[#0A66C2]/80 transition-colors"
                >
                  <FaLinkedin className="mr-2 text-xl" />
                  Connect with me on LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-12">
            About Me
          </h2>
          <div className="space-y-12">
            <div className="text-xl text-gray-800 leading-relaxed">
              I&apos;m a junior at the <Link href="/education" className="text-accent-blue hover:text-accent-purple transition-colors">University of Michigan</Link> studying Computer Science with a focus on AI integration and cloud technologies. I love building innovative solutions that push technical boundaries while maintaining a strong focus on user experience. I believe great software, like great music, should be both technically sophisticated and emotionally resonant.
            </div>

            <div className="text-xl text-gray-800 leading-relaxed">
              In the realm of software development, I&apos;m particularly drawn to cloud platforms and AI applications. I enjoy taking on complex technical challenges and transforming them into elegant, user-friendly solutions. Check out my <Link href="/projects" className="text-accent-blue hover:text-accent-purple transition-colors">projects</Link> and <Link href="/experience" className="text-accent-blue hover:text-accent-purple transition-colors">experience</Link> to see how I bring these ideas to life.
            </div>

            <div className="text-xl text-gray-800 leading-relaxed">
              Beyond my technical work, I&apos;m an active musician and music producer. When I&apos;m not coding, you can find me composing music, working on audio production, or collaborating with other artists. This creative outlet has taught me valuable lessons about attention to detail and user experience that I bring to all my projects. Explore my <Link href="/music" className="text-accent-blue hover:text-accent-purple transition-colors">music</Link> and <Link href="/media" className="text-accent-blue hover:text-accent-purple transition-colors">media</Link> projects to see my creative work.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}