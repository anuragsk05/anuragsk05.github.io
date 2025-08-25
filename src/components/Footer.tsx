import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/anuragsk05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-komaragiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0A66C2] transition-colors"
            >
              <FiLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:anurag.s.kom@gmail.com"
              className="text-gray-600 hover:text-accent-purple transition-colors"
            >
              <FiMail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Anurag Komaragiri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;