"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { LuDatabase } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";
import { ImMagicWand } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import { BsPlayCircleFill } from "react-icons/bs";

const images = [
  "/image/a1.png",
  "/image/a2.png",
  "/image/a3.png",
  "/image/a4.png",
  "/image/a5.png",
  "/image/a6.png",
  "/image/a7.png",
  "/image/a9.png",
  "/image/a4.png",
  "/image/a10.png",
  "/image/a11.png",
];

const Main = () => {
  const router = useRouter();
  const duplicatedImages = [...images, ...images];
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quint",
      once: false,
      mirror: false,
    });
  }, []);

  const cards = [
    {
      title: "Dashboarding tool",
      description:
        "Vizta goes beyond dashboards, offering interactive insights, real-time collaboration, and seamless customization across devices, making it a complete BI solution.",
      icon: <LuDatabase size={40} className="text-skyline-blue" />,
    },
    {
      title: "Data source organizer",
      description:
        "Effortlessly connect, organize, and model your data with Vizta's intuitive drag-and-drop interface—no technical expertise required.",
      icon: <MdOutlineDashboard size={40} className="text-mint-meadow" />,
    },
    {
      title: "KPI tracker",
      description:
        "Track, analyze, and act on your KPIs in one platform, while also uncovering deeper trends and insights to drive impactful decisions.",
      icon: <AiOutlineDashboard size={40} className="text-golden-peach" />,
    },
    {
      title: "Data visualizer",
      description:
        "Create stunning, customizable visualizations and dashboards that tell a story, enabling anyone to turn raw data into meaningful insights.",
      icon: <FaRegChartBar size={40} className="text-blush-rose" />,
    },
  ];

  const cardColors = [
    "bg-soft-blue",
    "bg-soft-green",
    "bg-soft-peach",
    "bg-soft-pink",
  ];

  return (
    <>
      <div
        className="flex flex-col items-center text-center p-6 md:p-12 overflow-hidden"
        style={{
          background:
            "linear-gradient(136deg, rgba(235, 248, 255, 0.5) 50%, #ffffff 50%)",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-950 pt-32">
          Data Visualized,
          <span className="text-blue-500"> Decisions Amplified</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-4 max-w-7xl">
          <p className="text-black text-sm md:text-xl max-w-2xl">
            Great decisions start with reliable data. Vizta transforms
            information into actionable insights, empowering you to make
            confident choices and achieve extraordinary results. Unlock clarity,
            innovation, and success with Vizta.
          </p>
          <div>
            <div>
              <button
                onClick={() => setShowVideo(true)}
                className="relative group w-96 h-56 flex items-center justify-center bg-white border-2 rounded-lg overflow-hidden cursor-pointer"
              >
                {!showVideo ? (
                  <>
                    <img
                      src="/image/Picture 1.png"
                      alt="Video Thumbnail"
                      className="w-full h-full object-contain"
                    />
                    <BsPlayCircleFill className="absolute text-5xl" />
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dVSMREwAUv4?autoplay=1"
                    title="YouTube Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => router.push("/trial")}
          className="mt-6 bg-blue-950 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Get started
        </button>
        <p className="mt-4 text-gray-500 text-sm">
          JOIN THOUSANDS OF DATA ENTHUSIASTS WITH VIZTA
        </p>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-blue-950 text-lg">
              &#9733;
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {[
            "Transform Raw Data into Stunning Visuals",
            "  Unlock Actionable Insights with Charts & Graphs",
            " Seamless Integration with Excel & SPSS",
            " AI-Driven Data Cleaning & Refinement",
            " Predictive Analytics Made Simple",
            " Secure & Scalable Visualization Environment",
          ].map((feature, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-blue-950 text-white rounded-full text-sm border border-gray-300"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
          <div className="text-center">
            <span className="text-purple-500 text-3xl">✨</span>
            <h3 className="text-xl font-semibold mt-2">Visualizations</h3>
            <p className="text-gray-600 text-sm mt-2">
              Automatically create interactive data visualizations.
            </p>
            <a
              onClick={() => router.push("/contact")}
              className="text-blue-800 font-medium mt-2 inline-block cursor-pointer"
            >
              Generate visualizations now →
            </a>
          </div>
          <div className="text-center">
            <span className="text-gray-700 text-3xl">💡</span>
            <h3 className="text-xl font-semibold mt-2">Insights</h3>
            <p className="text-gray-600 text-sm mt-2">
              Chat with your data and uncover actionable insights.
            </p>
          </div>
          <div className="text-center">
            <span className="text-gray-700 text-3xl">📈</span>
            <h3 className="text-xl font-semibold mt-2">Analysis</h3>
            <p className="text-gray-600 text-sm mt-2">
              Perform complex analysis and generate predictive insights.
            </p>
          </div>
        </div>
      </div>

      <section
        id="features-2"
        className="features-2  flex items-center overflow-hidden"
      >
        <div
          className="container mx-auto px-4 overflow-x-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-wrap items-center">
            {/* Left Column */}
            <div className="lg:w-1/3 w-full mb-5 lg:mb-0">
              {/* Feature Item 1 */}
              <div
                className="feature-item text-end mb-10 gap-4"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex items-center justify-end gap-4">
                  <div className="feature-content">
                    <h3 className="text-lg font-semibold">
                      Root Cause Analysis
                    </h3>
                    <p>Identify the issue in few clicks and take actions</p>
                  </div>
                  <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                    <MdOutlinePersonSearch className="text-2xl text-sky-600" />
                  </div>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div
                className="feature-item text-end mb-10 gap-4"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="flex items-center justify-end gap-4">
                  <div className="feature-content">
                    <h3 className="text-lg font-semibold">
                      Get data from all systems
                    </h3>
                    <p>Get a complete 360 view from multiple data sources</p>
                  </div>
                  <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                    <IoIosLaptop className="text-2xl text-sky-600" />
                  </div>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div
                className="feature-item text-end mb-10 gap-4"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-end gap-4">
                  <div className="feature-content">
                    <h3 className="text-lg font-semibold">Reduce Dependency</h3>
                    <p>
                      Reduce dependency from other departments and analysis time
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                    <IoEyeOutline className="text-2xl text-sky-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column (Phone Mockup) */}
            <div
              className="lg:w-1/3 w-full mb-5 lg:mb-0 flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="phone-mockup text-center relative">
                <img
                  src="/image/lappp.jpg"
                  alt="Laptop Mockup"
                  className="img-fluid w-full h-auto object-contain max-w-[300px] sm:max-w-[450px]"
                />
                <div className="absolute top-[25%] left-[20%] w-[70%] h-[32%] z-10">
                  <img
                    src="/image/viz.png"
                    alt="Laptop Screen Content"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/3 w-full">
              {/* Feature Item 1 */}
              <div
                className="feature-item mb-10 gap-4"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                    <ImMagicWand className="text-2xl text-sky-600" />
                  </div>
                  <div className="feature-content">
                    <h3 className="text-lg font-semibold">
                      AI Powered decisions
                    </h3>
                    <p>Start your journey toward AI powered decisions</p>
                  </div>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div
                className="feature-item mb-10 gap-4"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                    <PiMicrosoftTeamsLogoLight className="text-2xl text-sky-600" />
                  </div>
                  <div className="feature-content">
                    <h3 className="text-lg font-semibold">
                      Result Oriented team
                    </h3>
                    <p>
                      Team can get a view of their KPIs instantly and focus on
                      important activities
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div
                className="feature-item gap-4"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                    <GoDatabase className="text-2xl text-sky-600" />
                  </div>
                  <div className="feature-content">
                    <h3 className="text-lg font-semibold">
                      Data driven decision culture
                    </h3>
                    <p>
                      Embark on your journey towards data driven decision
                      culture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="bg-blue-100 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl mx-auto relative overflow-hidden">
      
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-30 rounded-2xl"></div>

        <div className="relative z-10 text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Want to visualize data better?
          </h2>
          <p className="text-gray-600 mt-2">
            Get custom Vizta plans tailored for your visualization needs.
          </p>
        </div>

        <button
          onClick={() => router.push("/trial")}
          className="relative z-10 bg-gray-800 text-white px-6 py-3 rounded-full mt-4 lg:mt-0 text-sm font-semibold hover:bg-gray-900 transition"
        >
          Contact
        </button>
      </div> */}

      <div
        className="bg-white flex flex-col justify-center items-center p-4 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="w-full max-w-4xl bg-white rounded-lg p-6 flex flex-col md:flex-row items-center overflow-hidden">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              Try Vizta for free. No credit card required, no software to
              install.
            </h1>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <button
                onClick={() => router.push("/trial")}
                className="bg-blue-950 text-white px-6 py-1 rounded-lg shadow-md hover:bg-blue-700"
              >
                Start free trial
              </button>
              <button
                onClick={() => router.push("/pricing")}
                className="border-2 border-blue-600 text-blue-600 px-6 py-1 rounded-lg hover:bg-blue-100 flex items-center"
              >
                See pricing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="image/Dani.png" // Replace with your image link
              alt="Vizta Illustration"
              className="w-[80%] max-w-sm object-contain"
            />
          </div>
        </div>
      </div>

      <div className="p-8 py-8 " data-aos="fade-up">
        <h1 className="text-center text-3xl font-semibold mb-12">
          Driving business decisions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 text-left">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`shadow-md rounded-lg p-6 flex flex-col items-start text-left ${cardColors[index]}`}
            >
              <div className="mb-4">{card.icon}</div>
              <h2 className="text-xl mb-2 text-left">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Introduction Video */}
      <section className="flex flex-col items-center text-center px-4 py-16 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Transform Your Data into Powerful Visual Insights
        </h1>
        <p className="text-black text-lg md:text-xl max-w-2xl mt-4">
          Vizta is the ultimate data visualization tool that helps you turn
          complex data into meaningful insights. With interactive charts,
          dashboards, and reports, you can make data-driven decisions
          effortlessly.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            onClick={() => router.push("/trial")}
            className="bg-blue-950 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
          >
            Start free trial
          </button>
          <button
            onClick={() => router.push("/watchdemovideo")}
            className="border bg-blue-950 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
          >
            Watch demo video
          </button>
        </div>
      </section>

      <div className="bg-white relative flex flex-col items-center justify-center py-20 px-6 sm:px-12 lg:px-24 rounded-lg  overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full "></div>
        </div>

        {/* Content */}
        <div
          className="relative z-10 text-center overflow-x"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-4xl font-semibold text-black leading-snug">
            Creating Customer-Centric Ecosystems: The Future of Brand
            Interaction
          </h2>
          <p className="mt-4 text-black text-sm sm:text-base max-w-lg mx-auto">
            Building a customer-centric ecosystem is the key to fostering
            loyalty and trust. By personalizing experiences, integrating
            touchpoints, and leveraging data-driven insights, businesses can
            create meaningful connections. The future of brand interaction lies
            in blending technology with empathy to deliver seamless,
            value-driven customer journeys that inspire long-term relationships.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="mt-6 bg-blue-950 text-white font-medium text-sm sm:text-base py-3 px-8 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            contact us
          </button>
        </div>
      </div>
      {/* Infinete time scrolling image  */}
      <div className="relative w-full overflow-hidden bg-white py-5 ">
        <div className="flex animate-[infiniteScroll_80s_linear_infinite] items-center space-x-4 w-max">
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              aria-hidden={index >= images.length}
              className="w-96 h-56 sm:w-[28rem] sm:h-64 object-contain rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
