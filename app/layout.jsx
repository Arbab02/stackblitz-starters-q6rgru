import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Government College Of Technology",
  description: "Garments World - Leading Garments manufacturers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        </body>
    </html>
  );
}