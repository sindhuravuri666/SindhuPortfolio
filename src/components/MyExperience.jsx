import { motion } from "framer-motion";

const experiences = [
  {
    company: "EventAura",
    role: "Founder",
    duration: "June 2024 - Feb 2025",
    description:
      "Built and deployed an event management platform using MongoDb, Express.Js, React.Js & Node.Js on Google Cloud Platform, featuring PhonePe integration, dynamic QR check-ins. Onboarded 5,000+ users and partnered with student communities and colleges generating ₹8,00,000+ in revenue. Developed real-time analytics dashboards and implemented secure, scalable infrastructure to support high performance event operations.",
    url: "https://eventauraa.tech",
  },
  {
    company: "InfraBIM Techno Solutions",
    role: "React Developer Intern",
    duration: "Nov 2024 - Dec 2024",
    description:
      "Developed and deployed a React.js dashboard with Redux for efficient state management, optimizing real-time data visualization. Reduced API calls by 15% through improved front-end architecture and performance tuning techniques.",
    url: "https://www.infrabim.in/",
  },
  {
    company: "Girl Script Summer of Code",
    role: "Mentor",
    // duration: "Ongoing",
    description:
      "Guided and mentored 10+ students in solving real-world problems using Machine Learning and Data Science. Contributed to open-source projects, enhancing community engagement and knowledge sharing.",
    url: "https://gssoc.girlscript.tech/",
  },
];

export const MyExperience = () => {
  return (
    <section id="experience" className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>

              {/* Role */}
              <h3 className="text-xl font-semibold">{exp.role}</h3>

              {/* Company Name + Link */}
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                {exp.company}
              </a>

              {/* Duration */}
              <p className="text-sm text-gray-500">{exp.duration}</p>

              {/* Description */}
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
