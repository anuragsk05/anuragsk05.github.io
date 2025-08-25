'use client';

import { motion } from 'framer-motion';
import { FiYoutube, FiExternalLink } from 'react-icons/fi';

interface MediaProjectProps {
  title: string;
  description: string[];
  videoUrl?: string;
  year?: string;
  type?: string;
  thumbnail?: string;
}

const MediaProject = ({
  title,
  description,
  videoUrl,
  year,
  type,
  thumbnail
}: MediaProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-200">{title}</h3>
            {year && <p className="text-sm text-gray-400 mt-1">{year}</p>}
            {type && <p className="text-sm text-accent-blue mt-1">{type}</p>}
          </div>
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
            >
              {videoUrl.includes('youtube') ? (
                <FiYoutube className="h-6 w-6" />
              ) : (
                <FiExternalLink className="h-5 w-5" />
              )}
            </a>
          )}
        </div>
        
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-accent-purple mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>

        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
          >
            <span className="mr-2">Watch Project</span>
            <FiExternalLink />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default MediaProject;