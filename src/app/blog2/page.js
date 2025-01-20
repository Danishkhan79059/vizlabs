"use client"
import React from "react";
import { IoArrowBack } from "react-icons/io5";
// import { useNavigate } from "react-router";
import { useRouter } from "next/navigation";

const page = () => {
  
  const router = useRouter();
  return (
    <div className="min-h-screen py-10 pt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mt-4 md:text-4xl lg:text-5xl">
            What is Vizta? Revolutionizing Data Visualization
          </h1>
          <p className="text-gray-600 mt-6 md:mt-8 text-lg">
            **Vizta** is a revolutionary Business Intelligence (BI) platform
            designed to help businesses make better, faster, and more informed
            decisions by providing real-time insights and dynamic data
            visualizations. It goes beyond traditional BI tools by offering
            personalized, interactive visualizations tailored to your business's
            specific needs. Vizta is built to transform raw data into clear,
            actionable insights that anyone in your organization can easily
            understand and act upon.
          </p>
          <p className="text-gray-600 mt-6 text-lg">
            Whether you're a small startup or a large enterprise, **Vizta**
            makes it easier to explore complex data sets and gain valuable
            insights. It integrates seamlessly with various data sources,
            allowing businesses to consolidate their data into a single, unified
            dashboard. This empowers users to analyze everything from sales
            performance to market trends, customer behavior, and operational
            efficiency—all in one place.
          </p>
          <div className="flex items-center mt-6 md:mt-8">
            <img
              src="image/Group.png" // Vizta logo link
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
            <span className="text-gray-700 text-sm font-semibold">Go Back</span>
          </button>
          <img
            src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/02/Data-Visualization-Infographic.png" // Replace with the actual image URL
            alt="Illustration"
            className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Blog Section Below */}
      <div className="max-w-7xl mx-auto mt-12 px-6 md:px-0">
        {/* Heading: The Key Features of Vizta */}
        <h2 className="text-2xl font-bold text-gray-800">
          Key Features of Vizta:
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          **Vizta** offers a wide range of features designed to simplify data
          analysis and provide meaningful insights. Here are some key
          functionalities that set it apart:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Real-time data visualization with customizable dashboards</li>
          <li>Seamless integration with various data sources</li>
          <li>Interactive charts and graphs for deeper data exploration</li>
          <li>Customizable filters and views for specific business needs</li>
          <li>AI-enhanced visualizations for faster decision-making</li>
        </ul>

        {/* Heading: How Vizta Empowers Businesses */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          How Vizta Empowers Businesses
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Vizta is more than just a tool—it's a game-changer for businesses. It
          empowers teams to access the right data at the right time and make
          decisions based on up-to-date, accurate information. Whether you're
          tracking sales, managing inventories, or optimizing marketing
          strategies, Vizta ensures that your team has the insights they need to
          perform at their best.
        </p>

        {/* Heading: Why Choose Vizta? */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Why Choose Vizta?
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          In today’s fast-paced business environment, having access to the right
          data is crucial. **Vizta** not only provides real-time visualizations
          but also enhances data exploration with its user-friendly interface
          and customizable features. By using Vizta, businesses can stay ahead
          of the competition by making data-driven decisions that foster growth
          and efficiency.
        </p>

        {/* Heading: The Future of Data Visualization */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          The Future of Data Visualization
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          As businesses continue to generate more data, the demand for effective
          data visualization tools will only grow. **Vizta** is at the forefront
          of this transformation, offering a powerful, intuitive platform that
          makes data easier to understand and act upon. The future of data
          visualization is not just about displaying data—it’s about enabling
          businesses to uncover insights and drive success.
        </p>
      </div>
    </div>
  );
};

export default page;
