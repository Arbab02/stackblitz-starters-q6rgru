'use client'

import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Full Name",
    designation: "Designation",
    image: "/hero.png",
  },
  {
    id: 2,
    name: "Full Name",
    designation: "Designation",
    image: "/hero.png",
  },
  {
    id: 3,
    name: "Full Name",
    designation: "Designation",
    image: "/hero.png",
  },
];

const Team = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <motion.h1
          className="text-5xl font-extrabold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Popular Teachers
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
          >
            <img
              className="w-3/4 rounded-full mb-4"
              src={member.image}
              alt={member.name}
            />
            <div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.designation}</p>
              <div className="flex justify-center mt-3 space-x-2">
                <a
                  href="#"
                  className="text-primary p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-primary p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-primary p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
