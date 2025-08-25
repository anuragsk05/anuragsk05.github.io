'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies?: string[];
  companyUrl?: string;
}

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  technologies,
  companyUrl
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6 mb-6"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-200">{title}</h3>
          <div className="flex items-center mt-1">
            <p className="text-lg text-accent-blue">{company}</p>
            {companyUrl && (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-accent-blue hover:text-accent-purple transition-colors"
              >
                <FiExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <p className="text-sm text-gray-400 mt-1">{duration}</p>
        </div>
      </div>
      
      <ul className="mt-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-start">
            <span className="text-accent-purple mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>

      {technologies && technologies.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-dark-lighter text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;