"use client";

import React from "react";
import { motion } from "framer-motion";
// import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";



const page = () => {
  const employees = [
    {
      id: 1,
      name: "Gopal krishna Basudevan",
      image: "/image/Gopal.png", // Replace with the actual image URL
      position: "Backend Developer",
      linkedin:
        "https://www.linkedin.com/in/gopal-krishna-basudevan-7b161215b/", // Add the LinkedIn profile link
    },
    {
      id: 2,
      name: "Parag Aggarwal",
      image: "/image/Parag.png", // Replace with the actual image URL
      position: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/parag-aggarwal01/", // Add the LinkedIn profile link
    },
    {
      id: 3,
      name: "Danish khan",
      image: "/image/Danish.png", // Replace with the actual image URL
      position: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/danishkhan786/", // Add the LinkedIn profile link
    },
    {
      id: 4,
      name: "Manav panwar",
      image: "/image/Manav.png", // Replace with the actual image URL
      position: "AI Integration",
      linkedin: "https://www.linkedin.com/in/manav-panwar-031213179/", // Add the LinkedIn profile link
    },
    {
      id: 5,
      name: "Neha verma",
      image: "/image/Neha.png", // Replace with the actual image URL
      position: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/neha-verma18g/", // Add the LinkedIn profile link
    },
  ];

  return (
    <>
      <div
        className=" text-black pt-40"
        style={{
          background:
            "linear-gradient(rgba(235, 248, 255, 0.5) 50%, #ffffff 50%)",
        }}
      >
        {/* Header Section */}
        <section className="px-6 md:px-20 py-10 text-center md:text-left ml-[10%]">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            "Revolutionizing Data Visualization with Vizta"
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
            Great insights don’t happen in isolation. That’s why Vizta offers
            end-to-end data visualization solutions that are miles ahead of
            traditional tools. By seamlessly transforming complex datasets into
            clear, interactive visuals, Vizta empowers you to explore, analyze,
            and share insights with unparalleled ease and precision.
          </p>
        </section>

        {/* Mission Section */}
        <section className="px-6 md:px-20 py-10 text-blue-900 text-center md:text-left ml-[10%]">
          <h2 className="text-2xl md:text-4xl font-bold max-w-3xl mx-auto">
            "Vizta: Turning Complex Data into Clarity."
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
            Vizta takes data visualization to the next level, offering tailored
            solutions to meet your needs, no matter where you start. Whether
            you're an individual exploring insights or part of a large team
            driving decisions through complex data workflows, Vizta empowers you
            with clear, compelling visualizations. From interactive dashboards
            to dynamic charts, Vizta transforms raw data into actionable
            insights, helping you unlock new opportunities and make informed
            decisions with confidence.
          </p>
        </section>
      </div>
      <div className=" text-black py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Mission Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At Vizta, our mission is to transform raw data into actionable
              insights, empowering teams and individuals to make confident,
              informed decisions. We provide a cutting-edge suite of tools
              designed to seamlessly visualize complex datasets, turning numbers
              into narratives and insights into impactful actions. Our platform
              is tailored for modern data-driven organizations, offering
              advanced capabilities that amplify decision-making at every level.
              Whether you are a business analyst, a decision-maker, or part of a
              collaborative data team, Vizta enables you to uncover
              opportunities, identify trends, and drive innovation with
              precision and clarity. With Vizta, raw data is no longer
              overwhelming—it’s an asset. We strive to simplify the complexity
              of information, offering intuitive data visualization,
              user-friendly workflows, and dynamic dashboards that adapt to your
              needs. Together, we unlock the potential of your data, amplifying
              decisions and fueling your journey toward success.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="flex items-center space-x-4">
              <div className="bg-pink-500 rounded-full p-4">
                <FaLocationDot />
              </div>
              <div>
                <p className="text-3xl font-bold">1</p>
                <p className="uppercase text-sm">Locations</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-4">
              <div className="bg-pink-500 rounded-full p-4">
                <MdEmojiEmotions />
              </div>
              <div>
                <p className="text-3xl font-bold">9+</p>
                <p className="uppercase text-sm">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" min-h-screen py-10 pt-40"
        style={{
          background:
            "linear-gradient(136deg, rgba(235, 248, 255, 0.5) 50%, #ffffff 50%)",
        }}
      >
        <div className="text-black flex flex-col items-center justify-center py-10 px-6 ">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About Vizta</h2>
          <p className="text-center max-w-2xl mb-8 text-lg text-gray-600">
            VizLabs empowers businesses by transforming raw data into actionable
            insights through cutting-edge visualization tools. Our mission is to
            make data accessible, insightful, and impactful for everyone.
          </p>
          <motion.button
            className="bg-[#6c63ff] text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-[#5a54e0] transition-all mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE OUR PLATFORM
          </motion.button>

          {/* Main Card Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-4xl mb-10 transition-all transform hover:scale-105 hover:shadow-xl">
            <motion.img
              src="/image/vizz.gif"
              alt="VizLabs Visualization"
              className="w-74 h-64 mx-auto mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h3>
            <p className="text-base mb-8 text-gray-600">
              VizLabs is a premier platform specializing in innovative data
              visualization solutions. Our tools are designed to empower
              businesses to make better decisions through insightful and
              interactive graphics.
            </p>

            {/* Founder Section */}
            <div className="p-6  rounded-lg flex flex-col items-center mb-8">
              <div className="w-28 h-28 rounded-full bg-gray-300 overflow-hidden mb-4">
                <img
                  src="/image/Mohit.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-medium text-gray-800">
                Founder of VizLabs : Mohit Panwar
              </h4>
              <p className="text-sm mt-3 max-w-md text-center text-gray-600">
                <span className="text-blue-600">Mohit Panwar</span>, the
                visionary
                <span className="text-blue-600"> Founder of VizLabs</span>,
                brings over <span className="text-blue-600">5 years</span> of
                expertise in data science and visualization. His career began at{" "}
                <span className="text-blue-600">DTDC</span>, where he worked as
                a Manager, gaining valuable insights into business operations
                and logistics. Mohit’s academic journey led him to earn an{" "}
                <span className="text-blue-600">MBA from IIM Mumbai</span>,
                equipping him with the knowledge to innovate in the field of
                technology and business. Inspired by his experiences, he founded{" "}
                <span className="text-blue-600">VizLabs</span>, a cutting-edge
                startup dedicated to making complex data more accessible and
                understandable through visualization. In just{" "}
                <span className="text-blue-600">one year</span>, VizLabs has
                already made waves in the industry, providing powerful tools
                that help businesses transform their data into actionable
                insights. With his deep understanding of both the corporate
                world and the technical aspects of data, Mohit continues to
                drive VizLabs toward becoming a leader in{" "}
                <span className="text-blue-600">
                  data visualization solutions
                </span>
                .
              </p>
            </div>
          </div>

          {/* Employee Section */}
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 ">
            Meet Our Team
          </h3>
          <div className=" py-10 ">
            <h1 className="text-center text-3xl font-semibold mb-8 text-gray-800">
              Leadership Team
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {employees.map((employee) => (
                <motion.div
                  key={employee.id}
                  className="flex flex-col items-center justify-between bg-grey-100 text-black p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Text Section */}
                  <div className="flex-1 text-center">
                    <h2 className="text-xl font-semibold mb-4">
                      {employee.name}
                    </h2>
                  </div>

                  {/* Circle Image */}
                  <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden mt-6">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-700">
                    {employee.position}
                  </p>
                  <a
                    href={employee.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <FaLinkedin
                      size={24}
                      className="text-blue-600 hover:text-blue-800"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white py-12  ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Branding */}
            <div className="flex items-center space-x-2">
              <img
                src="./image/viz.png"
                alt="Vizta Logo"
                className="w-48 h-14 object-contain"
              />
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61570940870974"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-600 hover:text-blue-800" />
                </a>
                <a
                  href="https://x.com/vizlabsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-blue-400 hover:text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/vizlabsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-pink-600 hover:text-pink-800" />
                </a>
                <a
                  href="https://www.linkedin.com/company/viz-labs/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-700 hover:text-blue-900" />
                </a>
              </div>
            </div>

            {/* What is Vizta? */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                What is Vizta?
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Build a Data Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    The Vizta Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    The Vizta Advantage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Data Analytics Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* About Vizta */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                About Vizta
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Vizta Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Awards and Recognition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Equality at Vizta
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-4">Support</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Vizta Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    All Releases
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
