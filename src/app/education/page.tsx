'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ActivityProps {
  title: string;
  role?: string;
  duration: string;
  description: string[];
  image?: string;
  imageLeft?: boolean;
}

const Activity = ({ title, role, duration, description, image, imageLeft = false }: ActivityProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl overflow-hidden"
    >
      {image ? (
        <div className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[500px]`}>
          <div className="lg:w-1/2 relative h-[500px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="lg:w-1/2 p-6">
            <h3 className="text-xl font-bold text-gray-200">{title}</h3>
            {role && <p className="text-accent-blue mt-1">{role}</p>}
            <p className="text-gray-400 text-sm mt-1">{duration}</p>
            <ul className="mt-4 space-y-2">
              {description.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-accent-purple mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-200">{title}</h3>
          {role && <p className="text-accent-blue mt-1">{role}</p>}
          <p className="text-gray-400 text-sm mt-1">{duration}</p>
          <ul className="mt-4 space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-accent-purple mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const AcademicSection = ({ title, items }: { title: string, items: any[] }) => {
  return (
    <div className="mt-8">
      <h4 className="text-xl font-semibold text-accent-blue mb-4">{title}</h4>
      <div className="space-y-6">
        {items.map((activity, index) => (
          <Activity key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default function Education() {
  const universities = [
    {
      school: "University of Michigan",
      degree: "Bachelor of Science in Computer Science",
      minor: "Music and Entrepreneurship",
      duration: "2023 – 2027",
      location: "Ann Arbor, MI",
      gpa: "3.4",
      courses: {
        computerScience: [
          "Data Structures & Algorithms",
          "Web Systems",
          "Discrete Math",
          "Computer Science Pragmatics",
          "UI/UX Design",
          "Database Management Systems"
        ],
        other: [
          "Economics (ECON 101)",
          "Business of Music (PAT 472)"
        ]
      },
      activities: {
        music: [
          {
            title: "Shift | Creator Space",
            role: "Mentee",
            duration: "2025 - Present",
            description: [
              "Showcased original pop song with research-based elements",
              "Participated in team gatherings, workshops, and collaborations"
            ],
            image: "/images/IMG_5768.jpg",
            imageLeft: true
          },
          {
            title: "Michigan Sahana",
            role: "Music Chair",
            duration: "2020 - 2023",
            description: [
              "Oversaw the coordination of numerous music programs, assembled music groups while ensuring experiential balance, mentoring newer musicians, and performing quality checks on songs",
              "Introduced new open-ended segment in Sahana performances, which encapsulated Indian traditional folk, devotional, and persian-influenced styles, broadening the scope of the repertoire"
            ],
            image: "/images/IMG_5419.JPG"
          },
          {
            title: "Campus Philharmonia Orchestra",
            duration: "2023 - Present",
            description: [
              "Performed as violinist for three semesters in Hill Auditorium",
              "Played pieces by iconic composers like Tchaikovsky, Beethoven, Bizet, and Dvorak",
              "Explored works by distinctive composers including Moncayo, Faure, and Sir Edward German"
            ],
            image: "/images/IMG_3774.png",
            imageLeft: true
          },
          {
            title: "Campus Jazz Ensemble",
            duration: "2023 - Present",
            description: [
              "Studied foundational jazz theory and blues concepts",
              "Performed vocal solo in end-of-semester showcase, demonstrating improvisational abilities",
              "Engaged in piece workshops and developed specialized practice techniques"
            ],
            image: "/images/IMG_5671.png"
          }
        ],
        media: [
          {
            title: "M-agination Films",
            duration: "2023 - Present",
            description: [
              "Participate in student film productions",
              "Contribute to film scoring and sound design"
            ]
          }
        ]
      }
    }
  ];

  const highSchool = {
    school: "Troy High School",
    degree: "High School Diploma",
    duration: "2019 – 2023",
    location: "Troy, MI",
    gpa: "4.2/4.0",
    activities: {
      leadership: [
        {
          title: "Film Club",
          role: "Vice-President",
          duration: "2019 - 2023",
          description: [
            "Led film production projects",
            "Organized film screenings and discussions",
            "Mentored new members in filmmaking techniques"
          ]
        },
        {
          title: "FIRST Robotics",
          role: "Digital Media Chair & Emcee",
          duration: "2019 - 2023",
          description: [
            "Managed digital media content for the team",
            "Served as team emcee at competitions",
            "Created promotional materials and documentation"
          ]
        },
        {
          title: "Troy Theatre Ensemble",
          role: "Member",
          duration: "2019 - 2023",
          description: [
            "Participated in theatrical productions",
            "Contributed to ensemble performances"
          ]
        }
      ]
    }
  };

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
            Education
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            My academic journey and extracurricular activities
          </p>
        </motion.div>

        {/* University of Michigan Section */}
        <div className="mt-16">
          <div className="glass rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-200">University of Michigan</h2>
                <p className="text-accent-blue mt-2">Bachelor of Science in Computer Science</p>
                <p className="text-accent-blue mt-1">Minor: Music and Entrepreneurship</p>
                <p className="text-gray-400 text-sm mt-2">2023 – 2027</p>
                <p className="text-gray-400 text-sm">Ann Arbor, MI</p>
                <p className="text-gray-300 mt-2">GPA: 3.4</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/Block_M-Hex.png"
                  alt="University of Michigan"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            {/* Coursework */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Relevant Coursework</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-accent-blue mb-2">Computer Science</h4>
                  <ul className="space-y-2">
                    {universities[0].courses.computerScience.map((course, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-accent-purple mr-2">•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-accent-blue mb-2">Other Courses</h4>
                  <ul className="space-y-2">
                    {universities[0].courses.other.map((course, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-accent-purple mr-2">•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-200 mb-6">Extracurricular Activities</h3>
              <div className="space-y-8">
                <AcademicSection title="Music Activities" items={universities[0].activities.music} />
                <AcademicSection title="Media & Film" items={universities[0].activities.media} />
              </div>
            </div>
          </div>
        </div>

        {/* Troy High School Section */}
        <div className="mt-16">
          <div className="glass rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-200">Troy High School</h2>
                <p className="text-accent-blue mt-2">High School Diploma</p>
                <p className="text-gray-400 text-sm">2019 – 2023</p>
                <p className="text-gray-400 text-sm">Troy, MI</p>
                <p className="text-gray-300 mt-2">GPA: 4.2/4.0</p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/FS_Troy_High_Primary.png"
                  alt="Troy High School"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-200 mb-6">Extracurricular Activities</h3>
              <AcademicSection title="Leadership Roles" items={highSchool.activities.leadership} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}