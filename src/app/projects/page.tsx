'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { FiGithub } from 'react-icons/fi';

export default function Projects() {
  const technicalProjects = [
    {
      title: "Instagram Clone",
      year: "2024",
      description: [
        "Full-stack app with Flask backend and React UI",
        "Optimized SQL database queries and API calls",
        "Implemented infinite scroll, likes, and comments",
        "Deployed on AWS"
      ],
      technologies: ["Flask", "React", "SQL", "AWS"],
      type: "Full Stack Development"
    },
    {
      title: "YouTube Summarization Tool",
      year: "2024",
      description: [
        "Built with Gemini multimodal models and Flask backend",
        "Supported customizable prompting for summaries",
        "Deployed on Google Cloud (Cloud Run)"
      ],
      technologies: ["Flask", "Gemini API", "Google Cloud"],
      type: "AI/ML Application",
      liveUrl: "https://youtube-summarizer-254865994400.us-central1.run.app/"
    },
    {
      title: "Piazza Post Classifier",
      year: "2023",
      description: [
        "Built Naïve Bayes classifier in C++",
        "Parsed CSV training data using file streams",
        "Used maps, sets, vectors for efficient probability storage",
        "Implemented auto-evaluation comparing predicted vs. actual labels"
      ],
      technologies: ["C++", "Machine Learning", "Data Structures"],
      type: "Machine Learning"
    }
  ];

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-200 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            A showcase of my technical work
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/anuragsk05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-md text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-purple hover:to-accent-blue transition-all duration-300"
          >
            <FiGithub className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}