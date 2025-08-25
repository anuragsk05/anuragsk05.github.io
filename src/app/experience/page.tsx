'use client';

import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Ask Sai Vidya",
      duration: "06/2025 – Present",
      description: [
        "Shipped chat-saving and account features using Auth0 and MongoDB, increasing account creation by 40%",
        "Designed sidebar UI for seamless navigation of OpenAI-powered discourse suggestions on Flask backend, boosting engagement by 15%",
        "Contributed to core UI components, improving usability and clarity in discourse browser and user profile",
        "Co-led product pitch to Sathya Sai International Organization's USA national team, securing crucial resources"
      ],
      technologies: ["Flask", "MongoDB", "Auth0", "OpenAI API"],
      companyUrl: "https://asksaividya.com/"
    },
    {
      title: "Software Engineer Intern",
      company: "Miracle Software Systems",
      duration: "05/2025 – 08/2025",
      description: [
        "Developed conversational AI assistant utilizing Gemini's API, enhancing client navigation and engagement by 20%",
        "Designed and implemented a Retrieval-Augmented Generation (RAG) system on Google Cloud",
        "Contributed to full-stack projects using FastAPI, Gemini, and SQLite",
        "Deployed cloud services and managed API integrations"
      ],
      technologies: ["FastAPI", "Gemini API", "Google Cloud", "SQLite", "RAG"]
    },
    {
      title: "Student Growth Ambassador",
      company: "Claim",
      duration: "08/2024 – 12/2024",
      description: [
        "Introduced app features to students at UMich",
        "Represented Claim at events, distributing promotional materials to boost onboarding",
        "Partnered with student orgs to establish fundraising collaborations"
      ]
    },
    {
      title: "Student Producer",
      company: "Troy School District",
      duration: "11/2021 – 07/2023",
      description: [
        "Produced content for $550M bond proposal, including campaign videos and school photography",
        "Filmed/edited 5 district events and photographed 11 events",
        "Produced 2 student music albums and edited 3 audio/visual ensemble recordings",
        "Managed live theatre event audio engineering and video streaming"
      ],
      technologies: ["Video Production", "Audio Engineering", "Photography"]
    }
  ];

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-200 sm:text-5xl">
            Work Experience
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}