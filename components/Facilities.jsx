'use client'

import { FaBusAlt, FaFutbol, FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Facilities = () => {
  return (
    <section className="py-20 bg-[#cbd3cb]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ maxWidth: '600px' }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800 mb-3">College Facilities</h1>
          <p className="text-gray-600">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaBusAlt className="text-6xl text-blue-500" />,
              title: 'School Bus',
              description:
                'Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit',
              bgColor: 'bg-blue-100',
              textColor: 'text-blue-500',
              delay: 0.1,
            },
            {
              icon: <FaFutbol className="text-6xl text-green-500" />,
              title: 'Playground',
              description:
                'Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit',
              bgColor: 'bg-green-100',
              textColor: 'text-green-500',
              delay: 0.3,
            },
            {
              icon: <FaHome className="text-6xl text-yellow-500" />,
              title: 'Healthy Canteen',
              description:
                'Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit',
              bgColor: 'bg-yellow-100',
              textColor: 'text-yellow-500',
              delay: 0.5,
            },
            {
              icon: <FaChalkboardTeacher className="text-6xl text-teal-500" />,
              title: 'Positive Learning',
              description:
                'Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit',
              bgColor: 'bg-teal-100',
              textColor: 'text-teal-500',
              delay: 0.7,
            },
          ].map((facility, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-6 ${facility.bgColor} rounded-lg shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: facility.delay }}
            >
              <div className="mb-4">{facility.icon}</div>
              <h3 className={`text-2xl font-semibold ${facility.textColor} mb-3`}>
                {facility.title}
              </h3>
              <p className="text-gray-600 text-center">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
