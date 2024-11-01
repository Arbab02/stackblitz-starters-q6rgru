'use client'


import { motion } from "framer-motion";
import { FaUniversity, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

const About = () => {
  return (
    <div className="container mx-auto  px-6">
      {/* Header Section */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-3">About Our College</h1>
        <p className="text-gray-600">
          Our college is committed to providing high-quality education to empower students with knowledge, skills, and values for a bright future.
        </p>
      </motion.div>

      {/* About Info Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaUniversity className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To nurture students' potential through an inclusive, innovative, and collaborative learning environment.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <GiGraduateCap className="text-5xl text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become a globally recognized institution, known for excellence in education, research, and community service.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-blue-500 text-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaUsers className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">5000+ Students</h3>
          <p>Empowering the next generation of thinkers, creators, and leaders.</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-green-500 text-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <FaChalkboardTeacher className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">200+ Faculty</h3>
          <p>Dedicated professionals providing unparalleled education and guidance.</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-red-500 text-white rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaUniversity className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">50+ Programs</h3>
          <p>Comprehensive programs that cater to a wide array of interests and goals.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
