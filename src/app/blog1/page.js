
"use client"
import React from "react";
import { IoArrowBack } from "react-icons/io5";
// import { useNavigate } from "react-router";
import { useRouter } from "next/navigation";

const page = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen py-10 pt-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <span className="text-blue-600 font-semibold text-sm uppercase">
              Artificial Intelligence
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mt-4 md:text-4xl lg:text-5xl">
              Tau: AI Integrated Data Visualization in Vizta
            </h1>
            <p className="text-gray-600 mt-6 md:mt-8 text-lg">
              Explore how **Tau**, an AI-powered feature in **Vizta**, leverages
              Large Language Models (LLMs) for dynamic data visualization and
              predictive insights. This integration brings a smarter way to
              analyze business data, enabling users to effortlessly uncover
              trends and make data-driven decisions faster.
            </p>
            <p className="text-gray-600 mt-6 text-lg">
              **Vizta** is a cutting-edge Business Intelligence (BI) tool
              designed to revolutionize how businesses analyze and interpret
              data. By incorporating **Tau**, we empower organizations to go
              beyond traditional reporting, using AI to offer personalized,
              interactive insights. Whether you're a small startup or a large
              enterprise, Vizta with Tau can adapt to your unique needs, turning
              complex datasets into actionable visual narratives.
            </p>
            <div className="flex items-center mt-6 md:mt-8">
              <img
                src="image/Group.png"
                alt="Vizta India"
                className="w-8 h-8"
              />
              <div className="ml-3 text-gray-500">
                <p>Vizta India</p>
                <p>December 13, 2022 • 6 min read</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <button
             onClick={() => router.back()} // Navigate back
              className="absolute top-[20%] left-[75%] flex items-center gap-2 p-2 rounded-lg bg-blue-100 shadow-md hover:shadow-lg transition"
            >
              <IoArrowBack className="text-gray-700 text-lg" />
              <span className="text-gray-700 text-sm font-semibold">
                Go Back
              </span>
            </button>
            <img
              src="image/blog1.webp" // Replace with the actual image URL
              alt="Illustration"
              className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Blog Section Below */}
        <div className="max-w-7xl mx-auto mt-12 px-6 md:px-0">
          {/* Heading: How Tau Enhances Your BI Experience */}
          <h2 className="text-2xl font-bold text-gray-800">
            How Tau Enhances Your BI Experience
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            With the integration of **Tau**, Vizta is not just another BI
            tool—it becomes a true partner in your decision-making process. By
            using AI to analyze your data, Tau can predict future trends,
            generate detailed insights, and provide visualizations that adapt to
            the context of your business needs. Whether it's financial analysis,
            customer segmentation, or operational optimization, Tau gives you
            the tools to make smarter, faster decisions.
          </p>

          {/* Heading: Key Features of Tau in Vizta */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            Key Features of Tau in Vizta:
          </h3>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>AI-powered insights for faster decision-making</li>
            <li>Dynamic data visualizations that adapt to your needs</li>
            <li>Predictive analytics to uncover future trends</li>
            <li>Seamless integration with your existing data sources</li>
            <li>Customizable dashboards to track key metrics</li>
          </ul>

          {/* Heading: Why Choose Vizta with Tau? */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            Why Choose Vizta with Tau?
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            In the modern data landscape, businesses need more than just
            historical insights—they need predictive power and actionable
            recommendations. With **Tau** integrated into **Vizta**, you get a
            comprehensive AI tool that not only visualizes your data but also
            helps forecast the future. Whether you're analyzing sales trends,
            market conditions, or operational performance, Tau provides you with
            accurate, real-time predictions and powerful visualizations.
          </p>

          {/* Heading: The Future of Business Intelligence */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            The Future of Business Intelligence
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            As the future of business intelligence evolves, AI will continue to
            play a critical role in transforming how we interact with data. Tau
            is at the forefront of this shift, offering an intuitive,
            intelligent way to harness the power of data. By choosing Vizta and
            Tau, you're positioning your business for success in a world driven
            by data insights.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
