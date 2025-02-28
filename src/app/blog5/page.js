"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen py-10 pt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <span className="text-blue-600 font-semibold text-sm uppercase">
            Business Intelligence
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-4 md:text-4xl lg:text-5xl">
            How Vizta Integrates with Your Data Sources
          </h1>
          <p className="text-gray-600 mt-6 md:mt-8 text-lg">
            <strong className="text-blue-400">
              {" "}
              Seamless Data Integration for Better Insights
            </strong>{" "}
            In today's data-driven world, having a business intelligence tool
            that seamlessly connects with your data sources is crucial. Vizta is
            designed to make data integration effortless, enabling users to
            visualize, analyze, and gain insights from their data without
            technical barriers. Whether your data resides in cloud-based
            platforms, relational databases, or external APIs, Vizta ensures a
            smooth and efficient connection process.
          </p>
          <p className="text-gray-600 mt-6 text-lg">
            Whether you are pulling data from a MySQL database, an API, or cloud
            storage, Vizta provides a user-friendly interface to effortlessly
            connect, retrieve, and visualize your data. By leveraging powerful
            data connectors, businesses can eliminate data silos and access
            comprehensive insights with a few clicks.
          </p>

          <div className="flex items-center mt-6 md:mt-8">
            <img
              src="image/Group.png" // Vizta logo link
              alt="Vizta India"
              className="w-8 h-8"
            />
            <div className="ml-3 text-gray-500">
              <p>Vizta India</p>
              <p>January 13, 2025 • 5 min read</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <button
            onClick={() => router.back()}
            className="absolute top-[20%] left-[75%] flex items-center gap-2 p-2 rounded-lg bg-blue-100 shadow-md hover:shadow-lg transition"
          >
            <IoArrowBack className="text-gray-700 text-lg" />
            <span className="text-gray-700 text-sm font-semibold">Go Back</span>
          </button>
          <img
            src="https://media.licdn.com/dms/image/D4D12AQE-d4xw2oPNLg/article-cover_image-shrink_720_1280/0/1717732779597?e=2147483647&v=beta&t=lE3ohyt81fLUGGt-LVhoIx-UBetVlokBsBMBewE8EcM" // Replace with the actual image URL
            alt="Illustration"
            className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Blog Section Below */}
      <div className="max-w-7xl mx-auto mt-12 px-6 md:px-0">
        {/* Heading: How Vizta Enhances Your Data Integration */}
        <h2 className="text-2xl font-bold text-gray-800">
          How Vizta Enhances Your Data Integration
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          With Vizta, integrating your data sources becomes a breeze. Our
          platform supports seamless connections with a wide range of data
          sources, such as relational databases, cloud storage services, and
          external APIs. By consolidating your data into a central platform,
          Vizta helps you eliminate data silos and unlock the full potential of
          your data.
        </p>

        {/* Heading: Key Features of Vizta's Data Integration */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Key Features of Vizta’s Data Integration:
        </h3>

        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>
            Connect with various data sources like MySQL, APIs, and cloud
            platforms
          </li>
          <li>Unified data view for deeper insights</li>
          <li>Customizable data connectors to suit your needs</li>
          <li>Easy-to-use interface for managing data flows</li>
          <li>Real-time data syncing for up-to-date visualizations</li>
        </ul>

        {/* Heading: Why Choose Vizta for Data Integration? */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Why Choose Vizta for Data Integration?
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Businesses today need more than just static reports—they need data
          that’s current, dynamic, and connected. Vizta makes it easy to
          integrate data from different sources, ensuring that your
          decision-making process is based on the most up-to-date and
          comprehensive view of your business. Our platform’s flexibility allows
          you to scale and customize your data integration strategies as your
          business grows.
        </p>

        {/* Heading: The Future of Data Integration */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          The Future of Data Integration
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          As data continues to grow in both volume and complexity, businesses
          will need smarter, more efficient ways to integrate, analyze, and
          visualize their data. Vizta’s data integration capabilities are
          designed with the future in mind. By providing businesses with
          powerful tools to connect disparate data sources, Vizta ensures that
          organizations stay ahead of the curve in the fast-evolving world of
          business intelligence.
        </p>
      </div>
    </div>
  );
};

export default page;
