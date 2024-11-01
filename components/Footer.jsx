import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#cbd3cb] text-gray-800 border-t-[1px] py-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>
            We are a leading Technical College high-quality courses
            tailored to your needs. Our commitment is to deliver the best
            services to our customers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="mb-2">Email: info@gct.com</p>
          <p className="mb-2">Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a8.75 8.75 0 0 1-2.5.69 4.36 4.36 0 0 0 1.92-2.41 8.72 8.72 0 0 1-2.76 1.06 4.36 4.36 0 0 0-7.45 3.97 12.36 12.36 0 0 1-8.97-4.55 4.36 4.36 0 0 0 1.35 5.82 4.32 4.32 0 0 1-1.97-.55v.06a4.36 4.36 0 0 0 3.5 4.27 4.37 4.37 0 0 1-1.97.07 4.36 4.36 0 0 0 4.07 3.03 8.73 8.73 0 0 1-5.39 1.86c-.35 0-.7-.02-1.05-.06a12.32 12.32 0 0 0 6.69 1.96c8.03 0 12.43-6.66 12.43-12.44 0-.19-.01-.38-.02-.56a8.89 8.89 0 0 0 2.18-2.27z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.6-2.46.71a4.3 4.3 0 0 0 1.88-2.37 8.65 8.65 0 0 1-2.74 1.04 4.32 4.32 0 0 0-7.39 3.94 12.28 12.28 0 0 1-8.91-4.5 4.32 4.32 0 0 0 1.34 5.77 4.3 4.3 0 0 1-1.95-.54v.05a4.32 4.32 0 0 0 3.47 4.23 4.33 4.33 0 0 1-1.94.07 4.32 4.32 0 0 0 4.03 3 8.67 8.67 0 0 1-5.37 1.85c-.35 0-.7-.02-1.04-.06a12.24 12.24 0 0 0 6.62 1.94c7.94 0 12.29-6.58 12.29-12.29 0-.19-.01-.38-.02-.57a8.77 8.77 0 0 0 2.17-2.26z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.49 0-9.96 4.47-9.96 9.96 0 4.41 3.6 8.08 8.16 8.93v-6.32h-2.44v-2.61h2.44v-2c0-2.42 1.48-3.76 3.63-3.76 1.03 0 1.91.08 2.17.11v2.52h-1.49c-1.17 0-1.39.56-1.39 1.37v1.78h2.78l-.36 2.61h-2.42v6.32c4.55-.85 8.15-4.52 8.15-8.93 0-5.49-4.47-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center mt-8">
        <p>&copy; 2024 G.C.T. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;