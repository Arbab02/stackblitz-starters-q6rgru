'use client'

import { motion } from 'framer-motion';

const Classes = () => {
  const classesData = [
    {
      title: 'Art & Drawing',
      teacher: 'John Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
      classImage: '/hero.png',
      teacherImage: '/hero.png',
    },
    {
      title: 'Color Management',
      teacher: 'John Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
      classImage: '/hero.png',
      teacherImage: '/hero.png',
    },
    {
      title: 'Athletic & Dance',
      teacher: 'John Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
      classImage: '/hero.png',
      teacherImage: '/hero.png',
    },
    {
      title: 'Language & Speaking',
      teacher: 'John Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
      classImage: '/hero.png',
      teacherImage: '/hero.png',
    },
    {
      title: 'Religion & History',
      teacher: 'John Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
      classImage: '/hero.png',
      teacherImage: '/hero.png',
    },
    {
      title: 'General Knowledge',
      teacher: 'John Doe',
      price: '$99',
      age: '3-5 Years',
      time: '9-10 AM',
      capacity: '30 Kids',
      classImage: '/hero.png',
      teacherImage: '/hero.png',
    },
  ];

  return (
    <div className="container mx-auto py-5">
      <div className="text-center mb-5">
        <motion.h1
          className="text-5xl font-extrabold text-gray-800 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          College Classes
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classesData.map((classItem, index) => (
          <motion.div
            key={index}
            className="bg-light p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="w-3/4 mx-auto p-3 bg-gray-100 rounded-full">
              <img
                className="rounded-full w-full"
                src={classItem.classImage}
                alt={classItem.title}
              />
            </div>
            <div className="bg-gray-100 rounded p-6 pt-8 mt-[-30px]">
              <a
                href="#"
                className="block text-center text-xl font-semibold text-gray-800 mt-3 mb-4"
              >
                {classItem.title}
              </a>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    className="rounded-full w-12 h-12 mr-3"
                    src={classItem.teacherImage}
                    alt={classItem.teacher}
                  />
                  <div>
                    <h6 className="text-primary mb-1">{classItem.teacher}</h6>
                    <small className="text-gray-500">Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-full py-2 px-4">
                  {classItem.price}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="border-t-2 border-primary pt-2">
                  <h6 className="text-primary font-semibold">Age:</h6>
                  <small>{classItem.age}</small>
                </div>
                <div className="border-t-2 border-success pt-2">
                  <h6 className="text-success font-semibold">Time:</h6>
                  <small>{classItem.time}</small>
                </div>
                <div className="border-t-2 border-warning pt-2">
                  <h6 className="text-warning font-semibold">Capacity:</h6>
                  <small>{classItem.capacity}</small>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
