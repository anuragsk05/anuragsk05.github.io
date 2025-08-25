'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface MusicProjectProps {
  title: string;
  description: string[];
  link?: string;
  linkText?: string;
  year?: string;
  type?: string;
}

const MusicProject = ({
  title,
  description,
  link,
  linkText,
  year,
  type
}: MusicProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-200">{title}</h3>
            {year && <p className="text-sm text-gray-400 mt-1">{year}</p>}
            {type && <p className="text-sm text-accent-blue mt-1">{type}</p>}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
            >
              <span className="mr-2">{linkText || 'Listen'}</span>
              <FiExternalLink />
            </a>
          )}
        </div>
        
        <ul className="mt-4 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-accent-purple mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default MusicProject;