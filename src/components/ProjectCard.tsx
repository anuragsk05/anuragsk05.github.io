'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  year?: string;
  type?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  year,
  type
}: ProjectCardProps) => {
  return (
    <div className="glass rounded-xl overflow-hidden h-full">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-200">{title}</h3>
            {year && <p className="text-sm text-gray-400 mt-1">{year}</p>}
            {type && <p className="text-sm text-accent-blue mt-1">{type}</p>}
          </div>
          <div className="flex space-x-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-blue transition-colors duration-200"
              >
                <FiGithub className="h-5 w-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-blue transition-colors duration-200"
              >
                <FiExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <ul className="space-y-2">
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
      </div>
    </div>
  );
};

export default ProjectCard;