'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface EducationItemProps {
  school: string;
  degree: string;
  duration: string;
  gpa: string;
  courses?: string[];
  activities?: string[];
  location: string;
}

const EducationItem = ({
  school,
  degree,
  duration,
  gpa,
  courses,
  activities,
  location
}: EducationItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6 mb-8"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-200">{school}</h3>
          <p className="text-accent-blue mt-1">{degree}</p>
          <p className="text-gray-400 text-sm">{duration}</p>
          <p className="text-gray-400 text-sm">{location}</p>
          <p className="text-gray-300 mt-2">GPA: {gpa}</p>
        </div>
        {school.includes("Michigan") && (
          <div className="flex-shrink-0 ml-4">
            <Image
              src="/images/umich-logo.png"
              alt="University of Michigan"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </div>
        )}
      </div>

      {courses && courses.length > 0 && (
        <div className="mt-4">
          <h4 className="text-gray-200 font-semibold mb-2">Relevant Coursework</h4>
          <p className="text-gray-300">{courses.join(", ")}</p>
        </div>
      )}

      {activities && activities.length > 0 && (
        <div className="mt-4">
          <h4 className="text-gray-200 font-semibold mb-2">Activities</h4>
          <ul className="list-disc list-inside text-gray-300">
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const Education = () => {
  const education = [
    {
      school: "University of Michigan",
      degree: "Bachelor of Science in Computer Science",
      duration: "2023 – 2027",
      location: "Ann Arbor, MI",
      gpa: "3.4",
      courses: [
        "Data Structures & Algorithms",
        "Web Systems",
        "Discrete Math",
        "Computer Science Pragmatics",
        "UI/UX Design",
        "Database Management Systems",
        "Economics (ECON 101)",
        "Business of Music (PAT 472)"
      ],
      activities: [
        "Michigan Sahana (Music Chair)",
        "Shift Creator Space",
        "Campus Philharmonia Orchestra",
        "M-agination Films",
        "Campus Jazz Ensemble"
      ]
    },
    {
      school: "Troy High School",
      degree: "High School Diploma",
      duration: "2019 – 2023",
      location: "Troy, MI",
      gpa: "4.2/4.0",
      activities: [
        "Film Club (Vice-President)",
        "FIRST Robotics (Digital Media Chair, Emcee)",
        "Troy Theatre Ensemble",
        "A Cappella Club"
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Education</h2>
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <EducationItem {...edu} />
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
