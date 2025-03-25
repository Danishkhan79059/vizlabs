"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Head from "next/head";

const page = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Vizta vs Tableau: Which Data Visualization Tool is Best?</title>
        <meta
          name="description"
          content="Compare Vizta and Tableau to find the best data visualization tool for your business. Discover key features, pricing, ease of use, and performance."
        />
      </Head>

      <div className="min-h-screen py-10 pt-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <span className="text-blue-600 font-semibold text-sm uppercase">
              Vizta vs Tableau
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mt-4 md:text-4xl lg:text-5xl">
              Vizta vs Tableau: Which One is Right for You?
            </h1>
            <p className="text-gray-600 mt-6 md:mt-8 text-lg">
              **Vizta** and **Tableau** are both powerful data visualization
              tools, but they cater to different audiences. While Tableau is an
              established solution with advanced capabilities, **Vizta**
              provides a cost-effective, user-friendly alternative that requires
              no steep learning curve. In this post, we will compare the two and
              help you decide which one is best suited for your needs.
            </p>
            <p className="text-gray-600 mt-6 text-lg">
              Whether you’re a small business owner, a startup, or a data-driven
              team at a large enterprise, finding the right tool to visualize
              and interpret your data is essential. Let’s explore how **Vizta**
              stands apart from Tableau in terms of cost, ease of use, and key
              features.
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
              onClick={() => router.back()} // Navigate back
              className="absolute top-[15%] left-[75%] flex items-center gap-2 p-2 rounded-lg bg-blue-100 shadow-md hover:shadow-lg transition"
            >
              <IoArrowBack className="text-gray-700 text-lg" />
              <span className="text-gray-700 text-sm font-semibold">
                Go Back
              </span>
            </button>
            <img
              src="image/vta.webp" // Replace with the actual image URL
              alt="Illustration"
              className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Blog Section Below */}
        <div className="max-w-7xl mx-auto mt-12 px-6 md:px-0">
          {/* Heading: Cost Comparison */}
          <h2 className="text-2xl font-bold text-gray-800">
            Cost Comparison: Vizta vs Tableau
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            One of the biggest factors when choosing between **Vizta** and
            **Tableau** is the **cost**. Tableau is a powerful tool, but it
            comes at a significant price, especially for small businesses or
            individuals. **Vizta**, on the other hand, is a highly affordable
            solution that doesn't compromise on quality, making it a perfect
            choice for budget-conscious users who still want excellent data
            visualization capabilities.
          </p>

          {/* Heading: Ease of Use */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            Ease of Use: Vizta for Everyone
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            Unlike Tableau, which has a steeper learning curve due to its
            advanced features and options, **Vizta** is designed for
            **everyone**. Whether you're a business owner with no technical
            background or a data analyst with limited experience, Vizta’s
            intuitive interface ensures that you can start visualizing your data
            with ease, without needing any extensive training or tutorials.
          </p>

          {/* Heading: Key Features of Vizta */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            Key Features of Vizta:
          </h3>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>Cost-effective for small businesses and startups</li>
            <li>Simple, easy-to-navigate interface for non-technical users</li>
            <li>Powerful data visualizations with just a few clicks</li>
            <li>
              Real-time updates and dynamic charts for fast decision-making
            </li>
            <li>Seamless integration with multiple data sources</li>
          </ul>

          {/* Heading: Why Choose Vizta? */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            Why Choose Vizta?
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            If you’re looking for an affordable, no-fuss tool that delivers
            high-quality data visualizations and insights, **Vizta** is the
            right choice for you. Whether you are working with financial data,
            marketing analytics, or customer behavior patterns, **Vizta** helps
            you visualize and understand your data without the complexity of
            traditional BI tools like Tableau. It’s the perfect solution for
            small businesses, startups, and anyone looking to get started with
            data analysis quickly.
          </p>

          {/* Heading: The Future of Data Visualization */}
          <h3 className="text-xl font-semibold text-gray-800 mt-8">
            The Future of Data Visualization
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            Data visualization tools like **Vizta** are revolutionizing how
            businesses interact with data. As more organizations move toward
            accessible, self-service BI platforms, **Vizta** is leading the
            charge in providing powerful, user-friendly solutions for all types
            of users. Whether you're a professional looking to dive deep into
            your data or a small business owner who needs quick insights,
            **Vizta** helps you stay ahead in the data-driven world.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
