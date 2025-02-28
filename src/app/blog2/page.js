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
          <h1 className="text-3xl font-bold text-gray-800 mt-4 md:text-4xl lg:text-5xl">
            What is Vizta? Revolutionizing Data Visualization
          </h1>
          <p className="text-gray-600 mt-6 md:mt-8 text-lg">
            <span className="text-blue-600">**Vizta**</span> is a revolutionary
            Business Intelligence (BI) platform designed to help businesses make
            better, faster, and more informed decisions by providing real-time
            insights and dynamic data visualizations...
          </p>
          <p className="text-gray-600 mt-6 text-lg">
            Whether you're a small startup or a large enterprise,{" "}
            <span className="text-blue-600">**Vizta**</span>
            makes it easier to explore complex data sets and gain valuable
            insights...
          </p>
          <div className="flex items-center mt-6 md:mt-8">
            <img
              src="image/Group.png" // Vizta logo link
              alt="Vizta India"
              className="w-8 h-8"
            />
            <div className="ml-3 text-blue-600">
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
        {/* Key Features of Vizta */}
        <h2 className="text-2xl font-bold text-gray-800">
          Key Features of Vizta:
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          <span className="text-blue-600">**Vizta**</span> offers a wide range
          of features designed to simplify data analysis and provide meaningful
          insights. Here are some key functionalities that set it apart:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Real-time data visualization with customizable dashboards</li>
          <li>Seamless integration with various data sources</li>
          <li>Interactive charts and graphs for deeper data exploration</li>
          <li>Customizable filters and views for specific business needs</li>
          <li>AI-enhanced visualizations for faster decision-making</li>
        </ul>

        {/* New Section: Best Chart Types for Data Visualization */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Best Chart Types for Data Visualization
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Choosing the right chart type is crucial in effectively communicating
          your data. Here are some of the best chart types for data
          visualization:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Line Charts for trend analysis over time</li>
          <li>Bar Charts for comparing categories</li>
          <li>Pie Charts for showing proportions</li>
          <li>Heatmaps for understanding the intensity of data</li>
          <li>Scatter Plots for relationships between variables</li>
        </ul>
        <img
          src="/image/table.png" // Replace with actual chart image
          alt="Chart Types"
          className="w-full max-w-full mx-auto rounded-xl mt-6"
        />
        <img
          src="/image/bar1.png" // Replace with actual chart image
          alt="Chart Types"
          className="w-full max-w-full mx-auto rounded-xl mt-6"
        />
        <img
          src="/image/bar2.png" // Replace with actual chart image
          alt="Chart Types"
          className="w-full max-w-full mx-auto rounded-xl mt-6"
        />

        {/* New Section: How to Build Data Visualizations with Excel */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          How to Build Data Visualizations with vizta
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Vizta is a powerful tool for creating basic data visualizations. Learn
          how to create bar charts, line graphs, and more with Vizta:
        </p>
        <ol className="list-decimal pl-6 mt-4 text-gray-600">
          <li>Step 1: Prepare your data in a table format</li>
          <li>
            Step 2: Use your data and choose the chart type from the "Insert"
            tab
          </li>
          <li>Step 3: Customize the chart with colors, labels, and legends</li>
          <li>
            Step 4: Use vizta’s built-in tools to adjust the chart’s appearance
          </li>
        </ol>
        <img
          src="/image/tabe3.png" // Replace with actual Excel chart image
          alt="table chart"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />
        <img
          src="/image/table4.png" // Replace with actual Excel chart image
          alt="table chart"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />

        {/* New Section: Customizable Data Dashboards for Analysts */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Customizable Data Dashboards for Analysts
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Dashboards are essential for analysts to monitor key metrics in
          real-time. Learn how to build customizable data dashboards:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Customize the layout to focus on critical KPIs</li>
          <li>Incorporate interactive features like drop-downs and filters</li>
          <li>Use dynamic charts and tables for real-time data updates</li>
          <li>Integrate with data sources like vizta or SQL databases</li>
        </ul>
        <img
          src="/image/dash.png" // Replace with actual dashboard image
          alt="Customizable Dashboards"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />

        {/* New Section: Data Visualization Software for Reports */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Data Visualization tools for Reports
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Data visualization software is crucial for creating insightful reports
          that communicate complex data. Discover the top tools for effective
          data presentation:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Utilize templates to create polished, professional reports</li>
          <li>Integrate with data sources for real-time updates</li>
          <li>
            Incorporate a variety of charts and graphs for better data
            comprehension
          </li>
          <li>Customize your reports to fit your audience’s needs</li>
        </ul>
        <img
          src="/image/tools.png" // Replace with actual report image
          alt="Data Visualization Reports"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />

        {/* New Section: Data Visualization Techniques for Beginners */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Data Visualization Techniques for Beginners
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Data visualization can be intimidating for beginners, but with the
          right techniques, anyone can start creating effective charts and
          graphs. Here’s how:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Start with simple charts like bar and line graphs</li>
          <li>
            Understand how to use colors and design to make data easy to
            interpret
          </li>
          <li>Focus on key metrics to avoid overwhelming your audience</li>
          <li>
            Explore free tools to practice and build your visualization skills
          </li>
        </ul>
        <img
          src="/image/dash.png" // Replace with actual beginner techniques image
          alt="Data Visualization for Beginners"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />

        {/* New Section: Interactive Charts for Data Analysis */}
        <h3 className="text-xl font-semibold text-gray-800 mt-8">
          Interactive Charts for Data Analysis
        </h3>
        <p className="text-gray-600 mt-4 text-lg">
          Interactive charts allow users to explore data dynamically. Learn how
          to integrate interactive charts into your data analysis workflow:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>
            Provide users with drill-down options to explore data in more detail
          </li>
          <li>
            Allow users to filter data by categories like time, region, or
            product
          </li>
          <li>
            Incorporate hover-over effects for displaying detailed data points
          </li>
          <li>
            Use dynamic charts that update in real-time based on user input
          </li>
        </ul>
        <img
          src="/image/chart8.png"
          alt="Interactive Charts for Data Analysis"
          className="w-full max-w-full mx-auto rounded-2xl mt-6"
        />
      </div>
    </div>
  );
};

export default page;
